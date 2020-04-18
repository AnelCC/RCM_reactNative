import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import {Colors} from "react-native/Libraries/NewAppScreen";

const TabNavigator = createBottomTabNavigator(
  {
    People: PeopleList,
    Add: AddPerson,
    Company: CompanyList,
  },
  {
    initialRouteName: 'People',
    tabBarOptions: {
      activeTintColor: '#ec151b',
      inactiveTintColor: Colors.white,
      showLabel: true,
      showIcon: true,
      style: {
        backgroundColor: '#26a69a',
      },
    },
  },
);

export default createAppContainer(TabNavigator);
