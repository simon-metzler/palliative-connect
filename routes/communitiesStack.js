import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Communities from '../screens/communities';
import Post from '../components/post';

const NativeStack = createNativeStackNavigator();

const CommunitiesStack = () => {
    return (
            <NativeStack.Navigator>
                <NativeStack.Screen name="Communities" component={Communities} options={{title: "Communities"}}/>
                <NativeStack.Screen name="Post" component={Post} options={{title: "Post"}}/>
            </NativeStack.Navigator>
    );
}


export default CommunitiesStack;