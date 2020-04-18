import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Icon, FlatList} from 'react-native';
import {connect, Provider} from 'react-redux';
import PeopleList from './PeopleList';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//import {getTheme} from 'react-native-material-kit';
//import Icon as actions from 'react-native-material-ki';
import * as actions from '../actions';

//const  theme = getTheme();
const mapStateToProps = (state) => {
  return {people: state.people};
};

const PeopleItem = (props) => {
  console.log("PeopleItem here" + props.people.firstName)
  const fullName = props.people.firstName+" "+props.people.lastName
  console.log("PeopleItem here full name " +fullName)
  return (
    <View style={styles.container}>
      <Image source={require('../image/background.jpeg')} style={styles.card} />
      <Image source={require('../image/woman.png')} style={styles.icon} />
      <Text style={styles.title}>
        {props.people.firstName} {props.people.lastName}
      </Text>
      <Text style={styles.description}>{props.people.company}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
  title: {
        position: 'absolute',
        top: 200,
        left: 50,
        color: 'white',
        fontSize: 24,
    },
    description: {
        position: 'absolute',
        top: 230,
        left: 50,
        color: 'white',
        fontSize: 18,
    },
    image: {
        height: 100,
    },
    actions: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 50,
        left: 30,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    },
});

export default connect(null, actions)(PeopleItem);
