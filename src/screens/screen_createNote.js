import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, Icon} from '@rneui/base';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const CreateNote = ({navigation}) => {
  let currentDate = new Date().toLocaleString();
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
            />
          }
        />
        <View style={styles.CreateNote}>
          <TextInput
            style={styles.NoteHeading}
            placeholder="Heading"
            placeholderTextColor={'#6a6a6a'}
            autoFocus
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
            />
          </ScrollView>
        </View>
      </React.Fragment>
      <View style={styles.bottomBar}>
        <Icon name="music-note" color={'#f45750'} />
        <Icon name="photo" color={'#81bfa6'} />
        <Icon name="notifications" color={'#8784bb'} />
        <Icon name="check-circle-outline" color={'#fccb90'} />
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
