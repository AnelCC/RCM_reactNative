import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Icon from 'react-native-vector-icons/RNIMigration';

const mapStateToProps = (state) => {
  return {people: state.people};
};
class CompanyList extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => {
      <Icon name={'archive'} size={50} color={tintColor} />;
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Add Company Screen</Text>
      </View>
    );
  }
}

export default connect(null, actions)(AddPerson);
