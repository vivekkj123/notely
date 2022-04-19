import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header, Icon} from '@rneui/base';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {getDBConnection, saveNote} from '../db-service';

const CreateNote = ({navigation}) => {
  let currentDate = new Date().toLocaleString();
  const [NewNote, setNewNote] = useState({
    lastUpdated: currentDate,
    type: 'reminder',
    title: '',
    content: '',
  });
  return (
    <React.Fragment>
      <React.Fragment>
        <Header
          backgroundColor="#fff"
          leftComponent={
            <Icon
              onPress={() => navigation.pop()}
              size={30}
              color={'#000'}
              name="arrow-left"
              type="material-community"
            />
          }
          rightComponent={
            <Icon
              size={30}
              color={'#6d74d2'}
              name="check"
              type="material-community"
              onPress={async () => {
                const db = await getDBConnection();
                await saveNote(db, NewNote);
                navigation.reset({
                  index: 0,
                  routes: [{name: 'HomeScreen'}],
                });
              }}
            />
          }
        />
        <View style={styles.CreateNote}>
          <TextInput
            style={styles.NoteHeading}
            placeholder="Heading"
            placeholderTextColor={'#6a6a6a'}
            autoFocus
            value={NewNote.title}
            onChangeText={newTitle => setNewNote({...NewNote, title: newTitle})}
          />
          <Text style={styles.NoteDate}>{currentDate}</Text>
          <ScrollView
            keyboardShouldPersistTaps="always"
            removeClippedSubviews={true}>
            <TextInput
              style={styles.NoteContent}
              placeholder="Write here..."
              placeholderTextColor={'#6a6a6a'}
              multiline
              value={NewNote.content}
              onChangeText={newContent =>
                setNewNote({...NewNote, content: newContent})
              }
            />
          </ScrollView>
        </View>
      </React.Fragment>
      <View style={styles.bottomBar}>
        <Icon
          name="music-note"
          color={'#f45750'}
          onPress={() => {
            setNewNote({...NewNote, type: 'audio'});
          }}
        />
        <Icon
          name="photo"
          color={'#81bfa6'}
          onPress={() => {
            setNewNote({...NewNote, type: 'image'});
          }}
        />
        <Icon
          name="notifications"
          color={'#8784bb'}
          onPress={() => {
            setNewNote({...NewNote, type: 'reminder'});
          }}
        />
        <Icon
          name="check-circle-outline"
          color={'#fccb90'}
          onPress={() => {
            setNewNote({...NewNote, type: 'todo'});
          }}
        />
      </View>
    </React.Fragment>
  );
};

export default CreateNote;

const styles = StyleSheet.create({
  CreateNote: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
    paddingHorizontal: 25,
  },
  NoteHeading: {
    fontWeight: '700',
    fontSize: 25,
    color: '#343434',
  },
  bottomBar: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  NoteDate: {
    color: '#515151',
  },
  NoteContent: {
    color: '#535353',
  },
});
