import  { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Communities from '../screens/communities';
import QuestionPortal from '../screens/question-portal';
import HomeStack from '../routes/homeStack';
import { createAppContainer } from 'react-navigation';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#52b1ff',
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Infos"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Questions"
        component={QuestionPortal}
        options={{
          tabBarLabel: 'Questions',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-question" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        
        name="Communities"
        component={Communities}
        options={{
          tabBarLabel: 'Communities',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group" color={color} size={size}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 10,
    paddingTop: 10,
    
  },
});

export default BottomTabs;