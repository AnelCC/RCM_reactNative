import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, SafeAreaView} from 'react-native';
import {connect, Provider} from 'react-redux';
import PeopleItem from './PeopleItem';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const mapStateToProps = (state) => {
  return {people: state.people};
};

class PeopleList extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.people}
          renderItem={({item}) => <PeopleItem people={item} />}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

// Using connect will mapping state to the redux and able to this component
export default connect(mapStateToProps)(PeopleList);
