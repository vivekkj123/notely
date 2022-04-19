import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {Icon} from '@rneui/base';
import {TouchableOpacity} from 'react-native-gesture-handler';
const HomeCard = ({id, type, lastUpdated, title, content, navigation}) => {
  let date = new Date(lastUpdated);
  // const Icons = {
  //   reminder: 'notifications',
  //   audio: 'music-note',
  //   image: 'photo',
  // };
  const Icons = [
    {
      type: 'image',
      backgroundColor: '#6170e6',
      icon: 'photo',
    },
    {
      type: 'reminder',

      backgroundColor: '#4dc08d',
      icon: 'notifications',
    },
    {
      type: 'audio',
      backgroundColor: '#ed676c',
      icon: 'music-note',
    },
    {
      type: 'todo',
      backgroundColor: '#a61b82',
      icon: 'check-circle-outline',
    },
  ];
  let Iconstyle = Icons.find(icon => icon.type === type);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CreateNote', {
          update: true,
          id: id,
        });
      }}>
      <Card containerStyle={styles.CardContainer}>
        <View style={styles.CardView}>
          <Icon
            name={Iconstyle.icon}
            backgroundColor={Iconstyle.backgroundColor}
            borderRadius={100}
            iconStyle={styles.CardIcon}
          />
          <View style={styles.titleDateView}>
            <Card.FeaturedTitle style={styles.title}>
              {title}
            </Card.FeaturedTitle>
            <Card.FeaturedSubtitle style={styles.date}>
              {date.toLocaleString()}
            </Card.FeaturedSubtitle>
          </View>
        </View>

        <Card.Divider />
        <Text style={styles.content}>{content}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  CardContainer: {borderRadius: 10, backgroundColor: '#fff'},
  CardView: {flexDirection: 'row'},
  CardIcon: {
    color: '#fff',
    padding: 10,
  },
  titleDateView: {paddingLeft: 20},
  title: {color: '#343434'},
  date: {color: '#515151'},
  content: {color: '#000'},
});
