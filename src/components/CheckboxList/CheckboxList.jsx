import React from 'react';
import CheckboxItem from '../CheckboxItem/CheckboxItem';

const CheckboxList = (props) => {
  const { checkboxes, onToggle } = props;
  return (
    <div>
      {checkboxes.map((checkbox) => (
        <CheckboxItem
          column={checkbox.title}
          isChecked={checkbox.checked}
          key={checkbox.value}
          onToggle={() => onToggle(checkbox.value)}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
