import React, { useContext, useEffect, useMemo, useState } from 'react';
import './ProfileList.module.scss';
import { getProfiles, makeProfiles } from '../profiles';
import ProfileItem from '../ProfileItem/ProfileItem';
import Context from '../../context/context';
import { useProfiles } from '../../hooks/useProfiles';
import styles from './ProfileList.module.scss';
import st from '../ProfileItem/ProfileItem.module.scss';

const ProfileList = () => {
  const numberOfProfiles = 15;
  const { checkboxes, setCheckboxes } = useContext(Context);

  const data = getProfiles();
  const [sort, setSort] = useState('');
  const profiles = useProfiles(data, sort, numberOfProfiles);
  const sortProfiles = (value) => {
    localStorage.setItem('sort', value);
    setSort(localStorage.getItem('sort'));
  };
  useEffect(() => {
    if (profiles.length === 0) {
      makeProfiles(numberOfProfiles);
    }
    if (profiles.length > 1) {
      sortProfiles(localStorage.getItem('sort'));
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {checkboxes.map((column, index) => {
            if (column.checked === 'true') {
              if (column.value !== 'color') {
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
              } else {
                return <th key={column.value}> {column.title}</th>;
              }
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
