import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Information = ({ route }) => {

    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ item.title }</Text>
            <Text style={styles.author}>Von { item.author }</Text>
            <Text style={styles.text}>{ item.text }</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 16,
        margin: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    title: {
        fontSize: 18, 
        fontWeight: "bold",
    },
    author: {
        marginTop: 10,
        fontSize: 14,
        color: "#888",
    },
    text: {
        marginTop: 20,
        fontSize: 16,
    }
});

export default Information;