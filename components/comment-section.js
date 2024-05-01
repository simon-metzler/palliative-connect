import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Comment from './comment';

const CommentSection = () => {

    const comments = [
        {"author": "Melanie Maringer", "content": "This is a comment!", "id": "1"},
        {"author": "David Sienz", "content": "This is another comment!", "id": "2"},
    ];




    return (
        <View>
            <Text style={styles.heading}>Comments:</Text>
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Comment author={item.author} content={item.content} />
                )}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    heading: {
        paddingLeft: 20,
        paddingTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CommentSection;