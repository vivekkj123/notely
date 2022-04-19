import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

export const getDBConnection = async () => {
  return openDatabase({name: 'notes.db', location: 'default'});
};
export const createTable = async db => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS notes(
          id integer primary key,
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
export const findNoteByid = async (db, id) => {
  const notes = [];
  const findQuery = `SELECT * FROM notes WHERE id= ${id} `;
  let results = await db.executeSql(findQuery);
  if (results) {
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        notes.push(result.rows.item(index));
      }
    });
  }
  return notes[0];
};
export const updateNote = async (db, note, id) => {
  const updateQuery = `UPDATE notes
  SET type = '${note.type}',
      title = '${note.title}',
      content = '${note.content}',
      lastUpdated = '${new Date().toLocaleString()}'
  WHERE id = ${id} `;
  await db.executeSql(updateQuery);
};
export const deleteNote = async (db, id) => {
  const deleteQuery = `DELETE from notes where id = ${id}`;
  await db.executeSql(deleteQuery);
};

enablePromise(true);
