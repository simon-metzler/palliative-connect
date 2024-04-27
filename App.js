import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabs from './components/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;