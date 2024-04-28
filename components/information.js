import React from 'react';
import { View, Text } from 'react-native';

const Information = ({ route }) => {

    const { item } = route.params;

    return (
        <View>
            <Text>{item.title}</Text>
        </View>
    );
};

export default Information;