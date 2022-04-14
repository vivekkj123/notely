import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/base';

const HomeScreen = () => {
  return (
    <View style={styles.HomeScreen}>
      <View style={styles.Appbar}>
        <Text>My Notes</Text>
        <Icon name="person-outline" />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  HomeScreen: {
    backgroundColor: '#fff',
    flex: 1,
    height: '100%',
  },
  Appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderColor: '#353535',
    borderWidth: 1,
  },
});
