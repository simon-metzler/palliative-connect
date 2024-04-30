import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Information from '../components/information';

const NativeStack = createNativeStackNavigator();

const HomeStack = () => {
    return (
            <NativeStack.Navigator>
                <NativeStack.Screen name="Home" component={Home} options={{title: "Infos"}}/>
                <NativeStack.Screen name="Information" component={Information} options={{title: "Artikel"}}/>
            </NativeStack.Navigator>
    );
}


export default HomeStack;