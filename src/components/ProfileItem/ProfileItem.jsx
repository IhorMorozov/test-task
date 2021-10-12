import React from 'react';
import { Link } from 'react-router-dom';
import getColors from '../colors';
import styles from './ProfileItem.module.scss';

const ProfileItem = ({ profile }) => {
  const colors = getColors();
  const selectProfile = (name) => {
    localStorage.setItem('selectedProfile', profile.name);
  };
  return (
    <tr key={Math.random()}>
      {localStorage.getItem('name') === 'true' && (
        <td key={profile.name}>
          <Link to="/summary" onClick={selectProfile}>
            {profile.name}
          </Link>
        </td>
      )}
      {localStorage.getItem('date') === 'true' && (
        <td key={profile.date}>{profile.date}</td>
      )}
      {localStorage.getItem('status') === 'true' && (
        <td key={profile.status}>{profile.status}</td>
      )}
      {localStorage.getItem('salary') === 'true' && (
        <td key={profile.salary}>{profile.salary}</td>
      )}
      {localStorage.getItem('balance') === 'true' && (
        <td key={profile.balance}>{profile.balance}</td>
      )}
      {localStorage.getItem('happiness') === 'true' && (
        <td key={profile.balance}>
          {' '}
          <progress
            max="100"
            value={Number(profile.happiness)}
            className={styles.progress}
          ></progress>
        </td>
      )}
      {localStorage.getItem('color') === 'true' && (
        <td key={profile.color}>
          <div className={styles.tooltip}>
            {colors[Number(profile.color)].heart}
            <span className={styles.tooltipText}>
              {colors[Number(profile.color)].tooltip}
            </span>
          </div>
        </td>
      )}
    </tr>
  );
};

export default ProfileItem;
