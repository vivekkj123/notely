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
  ];
  let Iconstyle = Icons.find(icon => icon.type === type);

  return (
    // <View>
    //   <Text>{type}</Text>
    //   <Text>{title}</Text>
    //   <Text>{updatedAt}</Text>
    //   <Text>{content}</Text>
    // </View>
    <Card containerStyle={{borderRadius: 10, backgroundColor: '#fff'}}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          name={Iconstyle.icon}
          backgroundColor={Iconstyle.backgroundColor}
          borderRadius={100}
          iconStyle={{
            color: '#fff',
            padding: 10,
          }}
        />
        <View style={{paddingLeft: 20}}>
          <Card.FeaturedTitle style={{color: '#343434'}}>
            {title}
          </Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={{color: '#515151'}}>
            {date.toLocaleString()}
          </Card.FeaturedSubtitle>
        </View>
      </View>

      <Card.Divider />
      <Text style={{color: 'black'}}>{content}</Text>
    </Card>
  );
};

export default HomeCard;

const styles = StyleSheet.create({});
