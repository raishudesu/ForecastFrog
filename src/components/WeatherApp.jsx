import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { TiLocation } from "react-icons/ti";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";
import { FiSunset, FiSunrise } from "react-icons/fi";
import SearchLocation from "./SearchLocation";
import { BiLoader } from "react-icons/bi";

const WeatherApp = () => {
  const [location, setLocation] = useState(null);

  // SINGLE DATA OBJECT
  const {
    isSuccess,
    isLoading,
    data: { resolvedAddress, description, currentConditions } = {}, // TO RESOLVE THE PROPERTY FIRST AND NOT COME AS UNDEFINED " = {} "
    refetch,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: async () => {
      return location
        ? await axios
            .get(
              `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=RBCZDLGC972YKPBKKVJ2UBRH4&contentType=json`
            )
            .then((result) => result.data)
            .catch((error) => {
              console.log(error);
            })
        : isLoading;
    },

    refetchOnWindowFocus: false,
  });

  // TO REFETCH THE API WHENEVER THERE'S A NEW LOCATION SUBMMITED ON THE SEARCH BAR
  useEffect(() => {
    if (location) {
      refetch();
    }
  }, [location, refetch]);

  const handleLocation = (input) => {
    const inputLocation = input.replace(/\s/g, "%20");
    setLocation(inputLocation);
  };

  const {
    temp,
    feelslike,
    humidity,
    windspeed,
    pressure,
    visibility,
    icon,
    sunrise,
    sunset,
    conditions,
    uvindex,
  } = currentConditions || {}; // TO RESOLVE THE PROPERTY FIRST AND NOT COME AS UNDEFINED " || {} "
  const weatherDetails = [
    { details: "Feels like", value: `${feelslike} °F` },
    { details: "Wind speed", value: `${windspeed} km/hr` },
    { details: "Humidity", value: `${humidity}%` },
    { details: "UV", value: uvindex },
    { details: "Visibility", value: `${visibility}km` },
    { details: "Air pressure", value: `${pressure} hPa` },
  ];
  return (
    <div className="w-full min-h-screen max-h-fit py-4 p-2 flex justify-center overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4 text-center md:max-w-[60%] lg:max-w-[50%] xl:max-w-[30%]">
        <SearchLocation handleLocation={handleLocation} />
        {location ? ( // Use ternary operator to conditionally render content
          <>
            <div className="flex justify-center items-center flex-wrap">
              <TiLocation size={40} />
              <h1 className="text-3xl font-semibold">{resolvedAddress}</h1>
            </div>
            {isLoading && <BiLoader size={30} className="animate-spin" />}
            {isSuccess && (
              <>
                <WeatherIcon icon={icon} />
                <div className="w-full flex flex-col justify-center items-center gap-2">
                  <h1 className="text-6xl font-bold">
                    {temp} <span className="text-3xl font-semibold">°F</span>
                  </h1>
                  <h1 className="font-semibold text-xl">{conditions}</h1>
                  <p>{description}</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                  <h1 className="text-xl">Current weather</h1>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {weatherDetails.map(({ details, value }, index) => {
                      return (
                        <WeatherDetails
                          key={index}
                          details={details}
                          value={value}
                        />
                      );
                    })}
                  </div>
                  <div className="w-full grid grid-cols-2 gap-6 bg-[#526D82] p-6 rounded-xl">
                    <div className="flex flex-col justify-center items-center gap-2">
                      <FiSunset size={30} />
                      <h1>Sunset</h1>
                      <h1>{sunset}</h1>
                    </div>

                    <div className="flex flex-col justify-center items-center gap-2">
                      <FiSunrise size={30} />
                      <h1>Sunrise</h1>
                      <h1>{sunrise}</h1>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <p>Ribbit...</p> // Display this when location is null
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
