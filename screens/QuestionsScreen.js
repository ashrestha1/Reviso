import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Text, theme } from 'galio-framework';

const styles = StyleSheet.create({
  container: {},
  text: {
    color: 'black',
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
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  productTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
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
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ marginTop: '40%' }}>
        <Block>
          <Block row>
            <Block row={true} card flex style={[styles.product, styles.shadow]}>
              <Block flex space="between" style={styles.productDescription}>
                <Text style={styles.text}>{questions[0].question}</Text>
              </Block>
            </Block>
          </Block>
        </Block>

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
    </View>
  );
};
