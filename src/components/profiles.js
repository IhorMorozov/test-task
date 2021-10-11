import namor from 'namor';
import {
  createTable,
  deleteTable,
  getProfilesData,
  insertRow,
  select,
} from './database';

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

function getRandomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function formatDate(date) {
  const d = new Date(date);
  const fd = {
    month: '' + (d.getMonth() + 1),
    day: '' + d.getDate(),
    year: d.getFullYear(),
  };
  if (fd.month.length < 2) fd.month = '0' + fd.month;
  if (fd.length < 2) fd.day = '0' + fd.day;
  return [fd.day, fd.month, fd.year].join('-');
}

const createNewProfile = () => {
  const statusChance = Math.random();
  const randomDate = formatDate(
    getRandomDate(new Date(2012, 0, 1), new Date())
  );
  const workBalance = Math.floor(Math.random() * 80 + 10);
  return {
    profileName: namor.generate({ words: 2, numbers: 0 }),
    status:
      Math.random() > 0.66
        ? 'Senior'
        : statusChance > 0.33
        ? 'Middle'
        : 'Junior',
    salary: `$${Math.floor(Math.random() * 50) * 100 + 1000}`,
    creationDate: randomDate,
    workLifeBalance: `${workBalance}% / ${100 - workBalance}%`,
    favoriteColor: `${Math.floor(Math.random() * 7)}`,
  };
};

export function makeProfiles(length) {
  const profiles = range(length).map((p) => createNewProfile());
  deleteTable();
  createTable();
  profiles.forEach((profile) => {
    insertRow(
      profile.profileName,
      profile.status,
      profile.creationDate,
      profile.workLifeBalance,
      profile.salary,
      profile.favoriteColor
    );
  });
  select();
}

export function getProfiles() {
  return getProfilesData();
}
