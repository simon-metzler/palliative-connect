import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({ author, content }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.author}>{author}</Text>
            <Text>{content}</Text>
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
    author: {
        fontWeight: 'bold',
    },
});

export default Comment;