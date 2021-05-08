import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Text, theme } from 'galio-framework';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const styles = StyleSheet.create({
  container: {},
  text: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: -0.02,
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
    color: 'black',
    fontSize: 15,
    fontWeight: '700',
  },
  buttonContainer: {
    marginTop: '5%',
    marginHorizontal: '10%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
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
    padding: 3,
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
  const [textColor, setTextColor] = useState('black');

  const answerPressed = (isCorrect) => {
    //score++
    questions[0].answers.map((answer) => {
      if (answer.isCorrect);
    });
  };

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

  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      <View style={{ marginTop: '15%' }}>
        <AnimatedCircularProgress
          size={80}
          width={8}
          fill={50}
          tintColor="#00e0ff"
          onAnimationComplete={() => console.log('')}
          backgroundColor="white"
          style={{ alignSelf: 'center', marginBottom: '5%' }}
          rotation={0}
        >
          {(fill) => <Text h4>12</Text>}
        </AnimatedCircularProgress>

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
            <TouchableOpacity
              key={answer.id}
              onPress={() => answerPressed(answer.correct)}
            >
              {ianswer.isCorrect}
              <Block card style={[styles.product, styles.shadow]}>
                <Block space="between" style={styles.productDescription}>
                  <Text style={[styles.answerText, { color: 'white' }]}>
                    {answer.text}
                  </Text>
                </Block>
              </Block>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* 
      <Text style={styles.text}>
        {`${this.state.correctCount}/${this.state.totalCount}`}
      </Text> */}
    </View>
  );
};
