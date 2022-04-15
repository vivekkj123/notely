import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@rneui/themed';
import {FAB, Icon, Image} from '@rneui/base';

const GettingStarted = ({navigation}) => {
  const {theme} = useTheme();
  return (
    <View style={styles.GettingStarted}>
      <Text style={theme.Text.titleStyle}>Notely</Text>
      <Text style={theme.Text.paragraph}>
        Capture what’s on your mind & get a reminder later at the right place or
        time. You can also add voice memo & other features
      </Text>
      <View style={styles.ImageTodo}>
        <Image
          style={{
            height: 500,
            width: 600,
            resizeMode: 'cover',
          }}
          source={require('../../assets/todo-illustration.png')}
        />
      </View>

      <FAB
        title={"Let's Start"}
        color="#6373ec"
        placement="right"
        style={{padding: 15}}
        icon={
          <Icon
            name="arrow-right"
            type="material-community"
            size={30}
            color="#fff"
          />
        }
        iconPosition="right"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{name: 'HomeScreen'}],
          });
        }}
      />
    </View>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  GettingStarted: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
  },
  Heading: {
    fontSize: 36,
    // fontWeight: '800',
  },
  ImageTodo: {
    position: 'absolute',
    bottom: -125,
    right: -200,
  },
});
