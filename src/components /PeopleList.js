import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/RNIMigration';

const mapStateToProps = state => {
  return {people: state.people};
};

class PeopleList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      <Icon name={'archive'} size={50} color={tintColor} />
    },
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.people}
          renderItem={({item}) => <PeopleItem people={item} />}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

// Using connect will mapping state to the redux and able to this component
export default connect(mapStateToProps)(PeopleList);
