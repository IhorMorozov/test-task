import React, { useMemo } from 'react';
import './ProfileList.module.scss';
import makeProfiles from '../makeProfiles';
import { Link } from 'react-router-dom';
import styles from './ProfileList.module.scss';

const ProfileList = () => {
  const numberOfProfiles = 16;
  const selectedColumns = [
    'Profile Name',
    'Status',
    'Current Salary',
    'Creation Date',
    'Work-Life Balance',
    'Favorite Color',
  ];
  const colors = [
    {
      heart: '💙',
      tooltip: 'Blue',
    },
    {
      heart: '💚',
      tooltip: 'Green',
    },
    {
      heart: '💛',
      tooltip: 'Yellow',
    },
    {
      heart: '🧡',
      tooltip: 'Orange',
    },
    {
      heart: '💜',
      tooltip: 'Purple',
    },
    {
      heart: '🖤',
      tooltip: 'Black',
    },
    {
      heart: '❤',
      tooltip: 'White',
    },
  ];
  const profiles = useMemo(() => makeProfiles(numberOfProfiles), []);
  return (
    <table>
      <thead>
        <tr>
          {selectedColumns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {profiles.map((profile) => {
          return (
            <tr key={Math.random()}>
              <td key={profile.name}>
                <Link to="/summary">{profile.profileName}</Link>
              </td>
              <td key={profile.status}>{profile.status}</td>
              <td key={profile.salary}>{profile.salary}</td>
              <td key={profile.creationDate}>{profile.creationDate}</td>
              <td key={profile.workLifeBalance}>{profile.workLifeBalance}</td>
              <td key={profile.favoriteColor}>
                <div className={styles.tooltip}>
                  {colors[profile.favoriteColor].heart}
                  <span className={styles.tooltipText}>
                    {colors[profile.favoriteColor].tooltip}
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProfileList;
