import { View, StyleSheet, FlatList } from "react-native";
import Blog from "../components/blog";
import { useState } from "react";

const Communities = () => {
    const [blogs, setBlogs] = useState([
        { title: 'Meine Reise mit Palliativversorgung', text: 'In meinem neuen Blogbeitrag möchte ich über die umfassende Unterstützung sprechen, die ich von unserem Palliativteam erhalte, während ich mit meiner schweren Krankheit umgehe.', author: 'Patientin Lisa', key: '1' },
        { title: 'Einblick in meine Hospizpflege-Erfahrung', text: 'Ich möchte in diesem Blogbeitrag einige Einblicke in die spezialisierte Pflege und Unterstützung teilen, die ich während meiner letzten Lebensphase erhalte, um mir Komfort und Würde zu ermöglichen.', author: 'Patient Peter', key: '2' },
        { title: 'Ein Tag im Leben mit Schmerzmanagement', text: 'In meinem Blogbeitrag möchte ich darüber sprechen, wie unser Palliativteam eng zusammenarbeitet, um meine Schmerzen effektiv zu lindern und meine Lebensqualität zu verbessern.', author: 'Patientin Sarah', key: '3' },
        { title: 'Die Bedeutung von psychosozialer Unterstützung für mich', text: 'In diesem Beitrag möchte ich die wichtige Rolle der psychologischen und sozialen Unterstützung für mich und meine Familie während dieser schwierigen Zeit hervorheben.', author: 'Patient Michael', key: '4' },
        { title: 'Wie meine Angehörigen mich unterstützen', text: 'Ich möchte in meinem Blogbeitrag über die Unterstützung sprechen, die ich von meinem Palliativteam erhalte, um meine Angehörigen zu unterstützen, damit sie für mich da sein können.', author: 'Patientin Julia', key: '5' },
        { title: 'Ein Blick auf meine ganzheitliche Palliativpflege', text: 'In diesem Blogbeitrag möchte ich über meinen ganzheitlichen Ansatz sprechen, der die verschiedenen Bedürfnisse, die ich während meiner Palliativversorgung habe, berücksichtigt.', author: 'Patient Markus', key: '6' }
      ]);
      
      

    return (
        <View style={styles.container}>
            <FlatList 
              data = {blogs}
              renderItem={({item}) => (
                <Blog item={item}/>
              )}
            
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },
})
 
export default Communities;