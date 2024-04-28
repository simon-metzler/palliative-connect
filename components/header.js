import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Palliative Connect</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        backgroundColor: '#52b1ff',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default Header;