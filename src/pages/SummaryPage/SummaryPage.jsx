import React from 'react';
import Card from '../../components/UI/Card/Card';
import styles from './SummaryPage.module.scss';
import { getProfiles } from '../../components/profiles';
import getColors from '../../components/colors';
import st from '../../components/ProfileItem/ProfileItem.module.scss';

const SummaryPage = () => {
  const profiles = getProfiles();
  const colors = getColors();
  const generalInfo = [];
  const otherInfo = [];
  const createObject = (title, body) => {
    return {
      title,
      body,
    };
  };
  profiles.map((profile) => {
    if (profile.name === localStorage.getItem('selectedProfile')) {
      localStorage.getItem('name') === 'true'
        ? generalInfo.push(createObject('Profile Name', profile.name))
        : otherInfo.push(createObject('Profile Name', profile.name));
      localStorage.getItem('date') === 'true'
        ? generalInfo.push(createObject('Creation Date', profile.date))
        : otherInfo.push(createObject('Creation Date', profile.date));
      localStorage.getItem('status') === 'true'
        ? generalInfo.push(createObject('Status', profile.status))
        : otherInfo.push(createObject('Status', profile.status));
      localStorage.getItem('salary') === 'true'
        ? generalInfo.push(createObject('Salary', profile.salary))
        : otherInfo.push(createObject('Salary', profile.salary));
      localStorage.getItem('balance') === 'true'
        ? generalInfo.push(createObject('Work-Life Balance', profile.balance))
        : otherInfo.push(createObject('Work-Life Balance', profile.balance));
      localStorage.getItem('happiness') === 'true'
        ? generalInfo.push(createObject('Happiness', profile.happiness))
        : otherInfo.push(createObject('Happiness', profile.happiness));
      localStorage.getItem('color') === 'true'
        ? generalInfo.push(createObject('Favorite Color', profile.color))
        : otherInfo.push(createObject('Favorite Color', profile.color));
    }
  });

  const insertCardData = (title, info) => {
    return (
      <div>
        <h1>{title}</h1>
        <div className={styles.summaryInfo}>
          {info.map((info) => (
            <p key={info.title}>
              <span className={styles.title}>{info.title}: </span>
              {info.title === 'Favorite Color' ? (
                <span className={st.tooltip}>
                  {colors[Number(info.body)].heart}
                  <span className={st.tooltipText}>
                    {colors[Number(info.body)].tooltip}
                  </span>
                </span>
              ) : info.title === 'Happiness' ? (
                <progress max="100" value={Number(info.body)}></progress>
              ) : (
                info.body
              )}
            </p>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.cardsWrapper}>
      <Card>{insertCardData('General Info', generalInfo)}</Card>
      <Card>{insertCardData('Other Info', otherInfo)}</Card>
    </div>
  );
};

export default SummaryPage;
