import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Easing } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Text, theme } from 'galio-framework';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Shake } from 'react-native-motion';
import { SimpleAnimation } from 'react-native-simple-animations';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';

import axios from 'axios';

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

export default ({ navigation, route }) => {
  const circularProgressRef = useRef();
  const [answerTextColor, setAnswerTextColor] = useState('black');
  const [correctAnswerBackground, setCorrectAnswerBackground] = useState(
    'white'
  );
  const [count, setCount] = useState(0);
  const [wrongAnswerBackground, setWrongAnswerBackground] = useState('white');
  const [value, setValue] = useState(0);
  const [animateOnUpdate, setAnimateOnUpdate] = useState(true);
  const [aim, setAim] = useState('in');
  const [delay, setDelay] = useState(0);
  const [direction, setDirection] = useState('left');
  const [newArray, setNewArray] = useState([]);

  const [score, setScore] = useState(0);
  const [once, setOnce] = useState(true);

  const token = route.params.token;
  const questionId = route.params.id;
  const questionData = route.params.data;
  const fakeData = route.params.fakeData;
  const timeLimit = route.params.timeLimit;

  const startAnimation = () => {
    setValue(value + 1);
  };

  const answerPressed = (answer) => {
    console.log(answer, ' ', questionData.problems[count].answers[0]);
    if (answer != questionData.problems[count].answers[0]) startAnimation();
    var newScore = score;
    if (answer == questionData.problems[count].answers[0]) {
      console.log(score, 'before');
      newScore = score + 1;
      setScore(score + 1);
      console.log(score, 'after');
    }
    setDirection('right');
    setDelay(3000);
    setAim('out');
    setAnswerTextColor('white');
    setCorrectAnswerBackground('#3CB371');
    setWrongAnswerBackground('#DC143C');

    if (count == questions.length - 1 || isLate) {
      submit(newScore);
    }

    //score++
    setTimeout(function () {
      setDirection('left');
      setDelay(0);
      setAim('in');
      setAnswerTextColor('black');
      setCorrectAnswerBackground('white');
      setWrongAnswerBackground('white');
      if (count < questions.length - 1) setCount(count + 1);
    }, 3000);
  };

  const submit = (newScore) => {
    setTimeout(function () {
      var percentageVal = (newScore / questionData.problems.length) * 100;
      console.log(score);
      console.log(questionData.problems.length);
      percentageVal = Math.round(percentageVal);

      var data = JSON.stringify({
        token: token,
        questionSetId: questionId,
        percentage: percentageVal,
      });

      console.log(data);

      axios
        .post(`http://16.162.3.244/score/submit/`, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res) => {
          navigation.navigate('Home');
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
  };

  const questions = questionData.problems;

  state = {
    correctCount: 0,
    totalCount: questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
  };

  let arcRef;

  useEffect(() => {
    arcRef.animate(100, 120000, Easing.quad);
  }, [arcRef]);

  const [isLate, setIsLate] = useState(false);
  return (
    <View style={{ flex: 1, paddingHorizontal: 5 }}>
      <View style={{ marginTop: '15%' }}>
        <AnimatedCircularProgress
          ref={(ref) => (arcRef = ref)}
          size={80}
          width={8}
          fill={100}
          tintColor="#00e0ff"
          backgroundColor="white"
          style={{ alignSelf: 'center', marginBottom: '5%' }}
          rotation={0}
        >
          {(fill) => <Text h4>{count + 1}</Text>}
        </AnimatedCircularProgress>
        <SimpleAnimation
          aim={aim}
          animateOnUpdate={animateOnUpdate}
          direction={direction}
          distance={500}
          duration={3000}
          friction={5}
          delay={delay}
          movementType="slide"
        >
          <Shake value={value} type="timing" useNativeDriver={true}>
            <Block>
              <Block row>
                <Block
                  row={true}
                  card
                  flex
                  style={[styles.product, styles.shadow]}
                >
                  <Block flex space="between" style={styles.productDescription}>
                    <Text style={styles.text}>{questions[count].question}</Text>
                  </Block>
                </Block>
              </Block>
            </Block>

            <View style={styles.buttonContainer}>
              {fakeData[count].map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => answerPressed(answer)}
                >
                  {answer == questionData.problems[count].answers[0] ? (
                    <Block
                      card
                      style={[
                        styles.product,
                        styles.shadow,
                        { backgroundColor: correctAnswerBackground },
                      ]}
                    >
                      <Block space="between" style={styles.productDescription}>
                        <Text
                          style={[
                            styles.answerText,
                            { color: answerTextColor },
                          ]}
                        >
                          {answer}
                        </Text>
                      </Block>
                    </Block>
                  ) : (
                    <Block
                      card
                      style={[
                        styles.product,
                        styles.shadow,
                        { backgroundColor: wrongAnswerBackground },
                      ]}
                    >
                      <Block space="between" style={styles.productDescription}>
                        <Text
                          style={[
                            styles.answerText,
                            { color: answerTextColor },
                          ]}
                        >
                          {answer}
                        </Text>
                      </Block>
                    </Block>
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </Shake>
        </SimpleAnimation>
      </View>
      {/* 
      <Text style={styles.text}>
        {`${this.state.correctCount}/${this.state.totalCount}`}
      </Text> */}
    </View>
  );
};
