import { StyleSheet, View, Text } from 'react-native';

const Blog = ( { item } ) => {
    return (
        <View style={styles.post}>
            <Text style={styles.title}>{ item.title }</Text>
            <Text style={styles.author}>{ item.author }</Text>
            <Text>{ item.text }</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    post: {
        padding: 16,
        margin: 10,
        borderColor: "#bbb",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "column",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    author: {
        fontSize: 14,
        color: "#888",
    },
})
 
export default Blog;