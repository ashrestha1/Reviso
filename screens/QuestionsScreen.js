import React from 'react';
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#36B1F0',
    flex: 1,
    paddingHorizontal: 20,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    letterSpacing: -0.02,
    fontWeight: '600',
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginTop: 20,
  },
  answerText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-between',
  },
});

export default ({ navigation }) => {
  const questions = [
    {
      question: "What is localhost's IP address?",
      answers: [
        { id: '1', text: '192.168.1.1' },
        { id: '2', text: '127.0.0.1', correct: true },
        { id: '3', text: '209.85.231.104' },
        { id: '4', text: '66.220.149.25' },
      ],
    },
    {
      question: 'What kind of fruit was used to name a computer in 1984?',
      answers: [
        { id: '1', text: 'Blackberry' },
        { id: '2', text: 'Blueberry' },
        { id: '3', text: 'Pear' },
        { id: '4', text: 'Apple', correct: true },
      ],
    },
  ];

  state = {
    correctCount: 0,
    totalCount: questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };

  console.log('question', questions.question);

  return (
    <View style={[styles.container, { backgroundColor: 'blue' }]}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.text}>{questions[0].question}</Text>

          <View style={styles.buttonContainer}>
            {questions[0].answers.map((answer) => (
              <TouchableOpacity key={answer.id} style={styles.button}>
                <Text style={styles.answerText}>{answer.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.text}>
          {`${this.state.correctCount}/${this.state.totalCount}`}
        </Text>
      </SafeAreaView>
    </View>
  );
};
