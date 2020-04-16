import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Icon} from 'react-native';
import {connect, Provider} from 'react-redux';
import PeopleList from './PeopleList';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//import {getTheme} from 'react-native-material-kit';
import * as actions from '../actions'

//const  theme = getTheme();
const mapStateToProps = (state) => {
  return {people: state.people};
};

const PeopleItem = (props) => {
  render() {
    return (
      <View>
          <Image />
          <Icon />
        <Text> {props.people.firstName}{props.people.lastName}</Text>
          <Text> {props.people.company}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
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
        top: 15,
        left: 0,
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

export default connect(mapStateToProps)(PeopleList);
