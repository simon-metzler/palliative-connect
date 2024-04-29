import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import Information from '../components/information';

const stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
            <stack.Navigator>
                <stack.Screen name="Home" component={Home} options={{title: "Infos"}}/>
                <stack.Screen name="Information" component={Information} options={{title: "Artikel"}}/>
            </stack.Navigator>
    );
}


export default HomeStack;