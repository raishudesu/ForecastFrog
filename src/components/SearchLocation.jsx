import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchLocation = ({ handleLocation }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    handleLocation(location); // Pass the input value to the parent component
  };

  return (
    <div className="w-full max-h-fit py-2">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Search location"
            className="p-3 rounded-full w-full text-[#242424] outline-[#526D82]"
            value={location}
            onChange={handleChange}
          />
          <button type="submit">
            <AiOutlineSearch size={30} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchLocation;
