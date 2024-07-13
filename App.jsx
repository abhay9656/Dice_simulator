import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

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

  const [result,setResult]=useState(dice1+dice2);

  const rolldice=()=>{
    const randomDice1=Math.floor(Math.random()*6)+1;
    const randomDice2=Math.floor(Math.random()*6)+1;

    setDice1(randomDice1);
    setDice2(randomDice2);
    setResult(randomDice1+randomDice2);
  }

  return (
    <View style={styles.container}>
     
        <Text style={styles.title}>Dice Simulator</Text>
        <View style={styles.diceContainer}> 
           <Image style={styles.dice} source={dice[dice1]}/>
           <Image style={styles.dice} source={dice[dice2]}/>
         </View>

         <TouchableOpacity onPress={rolldice}>
            <Text style={styles.rollButton}>Roll Dice</Text>
         </TouchableOpacity>


          <Text style={styles.result}>Result: {result}</Text>
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
  diceContainer:{
    flexDirection:'row',
    gap:10
  },
  rollButton:{
    fontSize:20,
    fontWeight:'bold',
    backgroundColor:'black',
    color:'white',
    padding:10,
    borderRadius:10,
    marginTop:20
  },
  result:{
    fontSize:30,
    fontWeight:'bold',
    marginTop:20,
    fontFamily:'monospace'
  },
});
