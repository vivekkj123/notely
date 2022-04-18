import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, FAB, Icon, SearchBar} from '@rneui/base';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import HomeCard from '../components/HomeCard';

const HomeScreen = ({navigation}) => {
  const [Notes, setNotes] = useState([
    {
      createdAt: 1649986246090,
      lastUpdated: 1649986246090,
      type: 'reminder',
      title: 'First Note',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa tempore iste numquam nobis. Aspernatur voluptatum debitis perspiciatis, autem ipsum officiis in consectetur cupiditate, error, neque animi qui odit necessitatibus.',
    },
    {
      createdAt: 1649986246090,
      lastUpdated: 1649986246590,
      type: 'audio',
      title: 'First Note',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa tempore iste numquam nobis. Aspernatur voluptatum debitis perspiciatis, autem ipsum officiis in consectetur cupiditate, error, neque animi qui odit necessitatibus.',
    },
    {
      createdAt: 1649986246090,
      lastUpdated: 1649986247090,
      type: 'image',
      title: 'First Note',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa tempore iste numquam nobis. Aspernatur voluptatum debitis perspiciatis, autem ipsum officiis in consectetur cupiditate, error, neque animi qui odit necessitatibus.',
    },
    {
      createdAt: 1649986247590,
      lastUpdated: 1649986247590,
      type: 'reminder',
      title: 'First Note',
      content:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsa tempore iste numquam nobis. Aspernatur voluptatum debitis perspiciatis, autem ipsum officiis in consectetur cupiditate, error, neque animi qui odit necessitatibus.',
    },
  ]);
  const [Selected, setSelected] = useState({
    AllNotes: true,
    Reminder: false,
    Audio: false,
    Images: false,
  });
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
      />
      <View style={styles.filterBar}>
        <TouchableOpacity
          onPress={() => {
            setSelected({
              AllNotes: true,
              Reminder: false,
              Audio: false,
              Images: false,
            });
          }}
          style={Selected.AllNotes ? styles.filterBtnActive : styles.filterBtn}>
          <Text style={styles.filterBtn_Text}>All Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected({
              Reminder: true,
              AllNotes: false,
              Audio: false,
              Images: false,
            });
          }}
          style={Selected.Reminder ? styles.filterBtnActive : styles.filterBtn}>
          <Text style={styles.filterBtn_Text}>Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected({
              Audio: true,
              AllNotes: false,
              Reminder: false,
              Images: false,
            });
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
            });
          }}
          style={Selected.Images ? styles.filterBtnActive : styles.filterBtn}>
          <Text style={styles.filterBtn_Text}>Images</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {Notes.map(note => (
          <HomeCard
            key={note.lastUpdated}
            type={note.type}
            lastUpdated={note.lastUpdated}
            title={note.title}
            content={note.content}
          />
        ))}
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
});
