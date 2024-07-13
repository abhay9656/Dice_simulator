import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

const dice={
  1:require('./assets/dice1.png'),
  2:require('./assets/dice2.png'),
  3:require('./assets/dice3.png'),
  4:require('./assets/dice4.png'),
  5:require('./assets/dice5.png'),
  6:require('./assets/dice6.png'),
}

export default function App() {
 
  const [dice1,setDice1]=useState(1);
  const [dice2,setDice2]=useState(2);

  return (
    <View style={styles.container}>
     
        <Text style={styles.title}>Dice Simulator</Text>
        <View > 
           <Image style={styles.dice} source={dice[dice1]}/>
           <Image style={styles.dice} source={dice[dice2]}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
     marginTop:100
  },
  title:{
    fontSize:30,
    fontWeight:'bold',
    marginBottom:30
  },
});
