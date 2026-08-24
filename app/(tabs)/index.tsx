import { StyleSheet,View, Text,Button } from 'react-native';
import Contador from '../src/contador'
import Comp from '../src/contador'
import React,{ useEffect, useState } from 'react';


const MudarCor =()=>{
  const [color, setColor]=useState('blue')

  const changeColor=()=>{
    setColor((prevColor)=>(prevColor ==='blue'? 'green':'blue'))
  }

  return (
      <View style={(styles.quadrado, {backgroundColor:'red', borderWidth:3,borderColor:'black'})}>
        <Button onPress={changeColor} title='Mudar cor'/>
      </View>
  )
}

export default function TabOneScreen() {
  return(
    <View style={styles.container}>
      <View style={styles.quadrado}>
          <MudarCor/> 

      </View>

      {/* <Contador inicial={100}/> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container:{flex:1,gap:5,justifyContent:'center',alignItems:'center',backgroundColor:"#fff"}
  ,tela1:{
    flexGrow:1, backgroundColor:"green", alignItems:"center",justifyContent:"center"
  },
  quadrado:{width:100,height:100,marginBottom:20}
});
