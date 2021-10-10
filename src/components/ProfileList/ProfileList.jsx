import React, { useContext, useMemo } from 'react';
import './ProfileList.module.scss';
import { getProfiles, makeProfiles } from '../profiles';
import ProfileItem from '../ProfileItem/ProfileItem';
import Context from '../../context/context';

const ProfileList = () => {
  const numberOfProfiles = 4;
  const { checkboxes, setCheckboxes } = useContext(Context);

  useMemo(() => {
    makeProfiles(numberOfProfiles);
  }, []);
  const profiles = getProfiles();

  return (
    <table>
      <thead>
        <tr>
          {checkboxes.map((column) => {
            if (column.checked === 'true') {
              return <th key={column.value}>{column.title}</th>;
            }
          })}
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile) => (
          <ProfileItem profile={profile} />
        ))}
      </tbody>
    </table>
  );
};

export default ProfileList;
