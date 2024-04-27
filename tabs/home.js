import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";
import Post from "../components/post";

const Home = () => {

    const [posts, setPosts] = useState([
        { title: 'Unterstützung für Patienten', text: 'Unser Palliativteam bietet umfassende Unterstützung für Patienten mit schweren Krankheiten.', author: 'Dr. Anna Müller', key: '1' },
        { title: 'Hospizpflege', text: 'Wir bieten spezialisierte Pflege und Unterstützung für Patienten in ihrer letzten Lebensphase, um ihnen Komfort und Würde zu ermöglichen.', author: 'Dr. Max Schmidt', key: '2' },
        { title: 'Schmerzmanagement', text: 'Unser Team aus Palliativmedizinern und Pflegekräften arbeitet eng zusammen, um Schmerzen effektiv zu lindern und die Lebensqualität unserer Patienten zu verbessern.', author: 'Dr. Julia Wagner', key: '3' },
        { title: 'Psychosoziale Unterstützung', text: 'Wir bieten nicht nur medizinische Versorgung, sondern auch psychologische und soziale Unterstützung für Patienten und ihre Familien, um sie während dieser schwierigen Zeit zu begleiten.', author: 'Dr. Michaela Becker', key: '4' },
        { title: 'Angehörigenbetreuung', text: 'Unser Team kümmert sich auch um die Bedürfnisse der Angehörigen, indem wir sie durch Beratung und Unterstützung dabei unterstützen, für ihre geliebten Menschen da zu sein.', author: 'Dr. Thomas Fischer', key: '5' },
        { title: 'Ganzheitlicher Ansatz', text: 'Unser Palliativzentrum verfolgt einen ganzheitlichen Ansatz, der die körperlichen, emotionalen, sozialen und spirituellen Bedürfnisse unserer Patienten berücksichtigt.', author: 'Dr. Laura Weber', key: '6' }
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