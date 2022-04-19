import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FAB, Icon, SearchBar} from '@rneui/base';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import HomeCard from '../components/HomeCard';
import {getDBConnection, getNotes} from '../db-service';

const HomeScreen = ({navigation}) => {
  let getNotesFromDB = async () => {
    const db = await getDBConnection();
    let notes = await getNotes(db);
    if (notes) {
      setNotes(notes);
      setFilteredNotes(notes);
    }
  };
  useEffect(() => {
    getNotesFromDB();
  }, []);
  const [Notes, setNotes] = useState([]);
  const [Search, setSearch] = useState('');
  const [FilteredNotes, setFilteredNotes] = useState([]);
  const [Selected, setSelected] = useState({
    AllNotes: true,
    Reminder: false,
    Audio: false,
    Images: false,
    Todo: false,
  });
  let SearchFunction = text => {
    setSearch(text);
    setFilteredNotes(
      Notes.filter(note =>
        note.title.toLowerCase().includes(Search.toLowerCase()),
      ),
    );
  };
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.Appbar}>
        <Text style={styles.Title}>My Notes</Text>
        <Icon name="person-outline" />
      </View>
      <SearchBar
        lightTheme
        containerStyle={{
          padding: 15,
          backgroundColor: '#f4f8fb',
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
        value={Search}
        onChangeText={SearchFunction}
      />
      <View style={styles.filterBar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                AllNotes: true,
                Reminder: false,
                Audio: false,
                Images: false,
                Todo: false,
              });
              setFilteredNotes(Notes);
            }}
            style={
              Selected.AllNotes ? styles.filterBtnActive : styles.filterBtn
            }>
            <Text style={styles.filterBtn_Text}>All Notes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                Reminder: true,
                AllNotes: false,
                Audio: false,
                Images: false,
                Todo: false,
              });
              setFilteredNotes(Notes.filter(note => note.type === 'reminder'));
            }}
            style={
              Selected.Reminder ? styles.filterBtnActive : styles.filterBtn
            }>
            <Text style={styles.filterBtn_Text}>Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                Audio: true,
                AllNotes: false,
                Reminder: false,
                Images: false,
                Todo: false,
              });
              setFilteredNotes(Notes.filter(note => note.type === 'audio'));
            }}
            style={Selected.Audio ? styles.filterBtnActive : styles.filterBtn}>
            <Text style={styles.filterBtn_Text}>Audio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                Images: true,
                AllNotes: false,
                Reminder: false,
                Audio: false,
                Todo: false,
              });
              setFilteredNotes(Notes.filter(note => note.type === 'image'));
            }}
            style={Selected.Images ? styles.filterBtnActive : styles.filterBtn}>
            <Text style={styles.filterBtn_Text}>Images</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                Images: false,
                AllNotes: false,
                Reminder: false,
                Audio: false,
                Todo: true,
              });
              setFilteredNotes(Notes.filter(note => note.type === 'todo'));
            }}
            style={Selected.Todo ? styles.filterBtnActive : styles.filterBtn}>
            <Text style={styles.filterBtn_Text}>Todo</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <ScrollView>
        {FilteredNotes.length === 0 ? (
          <Text style={styles.NotFoundText}> No Notes found</Text>
        ) : (
          FilteredNotes.map(note => (
            <HomeCard
              key={note.lastUpdated}
              type={note.type}
              lastUpdated={note.lastUpdated}
              title={note.title}
              content={note.content}
            />
          ))
        )}
      </ScrollView>
      <FAB
        title={'Create'}
        icon={<Icon name="add" color="#fff" />}
        color="#6373ec"
        placement="right"
        style={{padding: 15}}
        onPress={() => navigation.navigate('CreateNote')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreen: {
    backgroundColor: '#f4f8fb',
    flex: 1,
    height: '100%',
  },
  Appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  Title: {
    color: '#343434',
    fontFamily: 'Metropolis-Bold',
    fontSize: 22,
  },
  filterBar: {
    flexDirection: 'row',
  },
  filterBtn: {
    padding: 7,
    backgroundColor: '#ecedef',
    margin: 10,
    borderRadius: 5,
  },
  filterBtnActive: {
    padding: 7,
    backgroundColor: '#6373ec',
    margin: 10,
    borderRadius: 5,
  },
  filterBtn_Text: {
    color: '#000',
  },
  NotFoundText: {
    textAlign: 'center',
    paddingVertical: 15,
    color: '#000',
  },
});
