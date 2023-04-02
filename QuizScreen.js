import React,{useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Button } from 'react-native-elements';
const QuizScreen = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'Rome', 'Madrid'],
      correctAnswer: 'Paris'
    },
    {
      question: 'What is the highest mountain in the world?',
      options: [
        'Mount Kilimanjaro',
        'Mount Everest',
        'Mount Denali',
        'Mount Fuji',
      ]
       correctAnswer: 'Mount Everest'
    }
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <View style={styles.container}>
        <Text>Your score: {score}</Text>
        <Button title="Restart Quiz" onPress={() => {
          setCurrentQuestion(0);
          setScore(0);
        }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>

      {questions[currentQuestion].options.map((option) => (
        <Button
          key={option}
          title={option}
          onPress={() => handleAnswer(option)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default QuizScreen;
