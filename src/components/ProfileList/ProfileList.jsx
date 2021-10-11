import React, { useContext, useMemo, useState } from 'react';
import './ProfileList.module.scss';
import { getProfiles, makeProfiles } from '../profiles';
import ProfileItem from '../ProfileItem/ProfileItem';
import Context from '../../context/context';
import { useProfiles } from '../../hooks/useProfiles';
import styles from './ProfileList.module.scss';
import st from '../ProfileItem/ProfileItem.module.scss';

const ProfileList = () => {
  const numberOfProfiles = 4;
  const { checkboxes, setCheckboxes } = useContext(Context);
  useMemo(() => {
    makeProfiles(numberOfProfiles);
  }, []);
  const data = getProfiles();
  const [sort, setSort] = useState('');
  const profiles = useProfiles(data, sort, numberOfProfiles);
  const sortProfiles = (value) => {
    localStorage.setItem('sort', value);
    setSort(localStorage.getItem('sort'));
  };

  return (
    <table>
      <thead>
        <tr>
          {checkboxes.map((column, index) => {
            if (column.checked === 'true') {
              return (
                <th
                  key={column.value}
                  onClick={() => sortProfiles(column.value)}
                  className={styles.sortItem}
                >
                  <span className={st.tooltip}>
                    {column.title}
                    <span className={st.tooltipText}>Sort</span>
                  </span>
                </th>
              );
            }
          })}
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile, index) => (
          <ProfileItem profile={profile} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ProfileList;
