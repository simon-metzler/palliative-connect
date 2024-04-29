import { View, StyleSheet, FlatList, TextInput } from "react-native";
import QuestionPreview from "../components/questionPreview";
import { useState } from "react";

const QuestionPortal = () => {
  const [questions, setQuestions] = useState([
      { title: 'Was bietet das Palliativteam für Patienten an?', text: 'Unser Palliativteam bietet umfassende Unterstützung für Patienten mit schweren Krankheiten.', author: 'Dr. Anna Müller', key: '1' },
      { title: 'Welche Art von Pflege wird im Hospiz angeboten?', text: 'Wir bieten spezialisierte Pflege und Unterstützung für Patienten in ihrer letzten Lebensphase, um ihnen Komfort und Würde zu ermöglichen.', author: 'Dr. Max Schmidt', key: '2' },
      { title: 'Wie wird das Schmerzmanagement gehandhabt?', text: 'Unser Team aus Palliativmedizinern und Pflegekräften arbeitet eng zusammen, um Schmerzen effektiv zu lindern und die Lebensqualität unserer Patienten zu verbessern.', author: 'Dr. Julia Wagner', key: '3' },
      { title: 'Bietet das Palliativzentrum psychosoziale Unterstützung an?', text: 'Wir bieten nicht nur medizinische Versorgung, sondern auch psychologische und soziale Unterstützung für Patienten und ihre Familien, um sie während dieser schwierigen Zeit zu begleiten.', author: 'Dr. Michaela Becker', key: '4' },
      { title: 'Wie unterstützt das Team die Angehörigen?', text: 'Unser Team kümmert sich auch um die Bedürfnisse der Angehörigen, indem wir sie durch Beratung und Unterstützung dabei unterstützen, für ihre geliebten Menschen da zu sein.', author: 'Dr. Thomas Fischer', key: '5' },
      { title: 'Welchen Ansatz verfolgt das Palliativzentrum?', text: 'Unser Palliativzentrum verfolgt einen ganzheitlichen Ansatz, der die körperlichen, emotionalen, sozialen und spirituellen Bedürfnisse unserer Patienten berücksichtigt.', author: 'Dr. Laura Weber', key: '6' }
    ]);

    const [questionInput, setQuestionsInput] = useState('');

    const addQuestion = (question) => {
      setQuestions((prevQuestions) => {
        return ([
          ...prevQuestions,
          { title: question, text: "Noch nicht beantwortet.", author: '-', key: Math.random().toString()},
        ])})

      setQuestionsInput('');
    
    }


    return (
        <View style={styles.container}>
            <FlatList 
              data = {questions}
              renderItem={({item}) => (
                <QuestionPreview sytle={styles.post} item={item} />
              )}
            
            />

            <TextInput style={styles.input} placeholder="Stelle eine Frage..." value={questionInput} onChangeText={setQuestionsInput} onSubmitEditing={() => addQuestion(questionInput)} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#eee",
    },
    input: {
        marginBottom: 5,
        marginHorizontal: 5,
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#bbb",
        backgroundColor: "#fff",
    },
})
 
export default QuestionPortal;