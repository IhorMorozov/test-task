import React from 'react';
import CheckboxItem from '../CheckboxItem/CheckboxItem';

const CheckboxList = (props) => {
  // const { checkboxes } = props;
  return (
    <div>
      {/*{checkboxes.map((checkbox) => CheckboxItem())}*/}
      <CheckboxItem column={'Profile Name'} />
      <CheckboxItem column={'Status'} />
      <CheckboxItem column={'Current Salary'} />
      <CheckboxItem column={'Creation Date'} />
      <CheckboxItem column={'Work-Life Balance'} />
      <CheckboxItem column={'Favorite Color'} />
    </div>
  );
};

export default CheckboxList;
