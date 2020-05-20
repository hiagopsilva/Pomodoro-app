import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

function formatSeconds(seconds) {
  if (seconds < 60) {
    return `${seconds} seg`;
  }

  return `${Math.floor(seconds / 60)} min`;
}

const Timer: React.FC = () => {
  const [secondsEllapsed, setSecondsEllapsed] = useState(0);
  
  function startTimer() {
    
    setInterval(() => {
      setSecondsEllapsed(state => state + 1);
    }, 1000);
    
  }

  return (
    <LinearGradient
      colors={['#E7F3FE', '#9ABEE0']}
      style={styles.container}
    >
      <Text style={styles.title}>Pomodora</Text>

      <Text style={styles.title}>{formatSeconds(secondsEllapsed)}</Text>

      <TouchableOpacity style={styles.button} onPress={startTimer}>
        <MaterialIcons name="play-arrow" size={32} color="#FFF" />
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#1C354F',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    maxWidth: 280,
    marginVertical: 80,
  },

  button: {
    width: 72,
    height: 72,
    backgroundColor: '#2E5B9A',
    borderRadius: 36,
    alignItems: 'center',
    justifyContent: 'center'
  }

})