import React, { useState } from "react";
import Select from "react-select";
import { dropdownData } from "../../helpers/dropdownData";
import "./DropdownStyles.scss";

const DropdownComponent = ({ placeholder, data }) => {
  const [isClearable, setIsClearable] = useState(true);

  return (
    <div className="dropdown-wrapper">
      <Select
        placeholder={placeholder}
        className="basic-single"
        classNamePrefix="select"
        isClearable={isClearable}
        name="color"
        options={dropdownData(data)}
      />
    </div>
  );
};

export default DropdownComponent;
