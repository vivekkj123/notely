import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Card} from '@rneui/themed';
import {Icon} from '@rneui/base';
const HomeCard = ({type, lastUpdated, title, content}) => {
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
    // <View>
    //   <Text>{type}</Text>
    //   <Text>{title}</Text>
    //   <Text>{updatedAt}</Text>
    //   <Text>{content}</Text>
    // </View>
    <Card containerStyle={styles.CardContainer}>
      <View style={styles.CardView}>
        <Icon
          name={Iconstyle.icon}
          backgroundColor={Iconstyle.backgroundColor}
          borderRadius={100}
          iconStyle={styles.CardIcon}
        />
        <View style={styles.titleDateView}>
          <Card.FeaturedTitle style={styles.title}>{title}</Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={styles.date}>
            {date.toLocaleString()}
          </Card.FeaturedSubtitle>
        </View>
      </View>

      <Card.Divider />
      <Text style={styles.content}>{content}</Text>
    </Card>
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
