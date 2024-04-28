import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const InformationPreview = ( { item, navigation } ) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Information", { item: item })}>
        <View style={styles.post}>
            <Text style={styles.title}>{ item.title }</Text>
            <Text style={styles.author}>{ item.author }</Text>
            <Text>{ item.text }</Text>
        </View>
        </TouchableOpacity>
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
 
export default InformationPreview;