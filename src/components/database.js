const db = openDatabase('my.db', '1.0', 'My WebSQL Database', 2 * 1024 * 1024);
const profiles = [];

export const createTable = () => {
  db.transaction(function (tx) {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS profiles (id integer primary key, name text, status text, date text, balance text, salary text, color number)'
    );
  });
};

export const deleteTable = () => {
  db.transaction(function (tx) {
    tx.executeSql('DROP TABLE profiles');
  });
};

export const insertRow = (name, status, date, balance, salary, color) => {
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO profiles (name, status, date, balance, salary, color) VALUES (?,?,?,?,?,?)',
      [name, status, date, balance, salary, color]
    );
  });
};

export const addProfile = (name, status, date, balance, salary, color) => {
  const newProfile = { name, status, date, balance, salary, color };
  if (name && status) {
    profiles.push(newProfile);
  }
};

export const getProfilesData = () => {
  return profiles;
};

export const select = () => {
  db.transaction(function (tx) {
    tx.executeSql(
      'SELECT name, status, date, balance, salary, color FROM profiles',
      [],
      function (tx, results) {
        if (results.rows.length > 0) {
          for (let i = 0; i < results.rows.length; i++) {
            let profile = results.rows.item(i);
            addProfile(
              profile.name,
              profile.status,
              profile.date,
              profile.balance,
              profile.salary,
              profile.color
            );
          }
        }
      }
    );
  });
};
