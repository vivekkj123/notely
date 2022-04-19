import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

export const getDBConnection = async () => {
  return openDatabase({name: 'notes.db', location: 'default'});
};
export const createTable = async db => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS notes(
          lastUpdated TEXT,
          type TEXT,
          title TEXT NOT NULL,
          content TEXT NOT NULL
      );`;

  await db.executeSql(query);
};
export const getNotes = async db => {
  const notes = [];
  const results = await db.executeSql('SELECT * FROM notes');
  if (results) {
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        notes.push(result.rows.item(index));
      }
    });
  }
  return notes;
};

export const saveNote = async (db, notes) => {
  const insertQuery =
    'INSERT OR REPLACE INTO notes(lastUpdated,type,title,content) values' +
    `('${notes.lastUpdated}','${notes.type}','${notes.title}','${notes.content}')`;

  return db.executeSql(insertQuery);
};

export const deleteNotes = async (db, id) => {
  const deleteQuery = `DELETE from notes where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

enablePromise(true);
