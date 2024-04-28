import { StyleSheet, View } from 'react-native';
import BottomTabs from './components/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />

      <NavigationContainer>
        <BottomTabs/>
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