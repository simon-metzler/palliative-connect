import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import Post from "../components/post";

const Home = () => {

    const [posts, setPosts] = useState([
        { title: 'Lebensgeschichte', text: 'Meine Leben begann hart', author: 'Max Mustermann', key: '1' },
        { title: 'Juhu', text: 'Ich hatte einen schönen Tag heute', author: 'Anna Beispiel', key: '2' },
        { title: 'Fröhlich', text: 'Cooler und fröhlicher Tag heute', author: 'John Doe', key: '3' },
        { title: 'Abenteuerlustig', text: 'Erlebte ein aufregendes Abenteuer heute!', author: 'Lena Muster', key: '4' },
        { title: 'Nachdenklich', text: 'Gedanken über die Welt und das Leben', author: 'Peter Parker', key: '5' },
        { title: 'Kreative Ecke', text: 'Kunstwerke und Ideen zum Teilen', author: 'Sarah Smith', key: '6' },
        { title: 'Mittwochsmotivation', text: 'Aufstehen und glänzen!', author: 'David Jones', key: '7' },
        { title: 'Reisetagebuch', text: 'Entdeckungen und Erlebnisse unterwegs', author: 'Eva Müller', key: '8' },
        { title: 'Kochen mit Leidenschaft', text: 'Neue Rezepte und kulinarische Experimente', author: 'Michael Meier', key: '9' },
        { title: 'Musikalische Reise', text: 'Noten und Melodien, die meine Seele berühren', author: 'Julia Johnson', key: '10' },
        { title: 'Buchbesprechung', text: 'Spannende Lektüre, die ich empfehlen kann', author: 'Robert Brown', key: '11' },
        { title: 'Sportliche Begeisterung', text: 'Erfolge und Herausforderungen beim Training', author: 'Sophie Schmidt', key: '12' }
      ]);
      
      

    return (
        <View style={styles.container}>
            <FlatList 
              data = {posts}
              renderItem={({item}) => (
                <Post item={item}/>
              )}
            
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})


 
export default Home;