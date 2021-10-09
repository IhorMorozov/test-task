import React from "react";
import CheckboxItem from "../CheckboxItem/CheckboxItem";

const CheckboxList = (props) => {
  const { checkboxes } = props;
  return (
    <div>
      {/*{checkboxes.map((checkbox) => CheckboxItem())}*/}
      <CheckboxItem column={"Profile Name"} />
      <CheckboxItem column={"Date"} />
      <CheckboxItem column={"Status"} />
    </div>
  );
};

export default CheckboxList;
