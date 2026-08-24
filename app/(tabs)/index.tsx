import { StyleSheet,View, Text } from 'react-native';
import Contador from '../src/contador'
import Comp from '../src/contador'
import { useEffect, useState } from 'react';


const Pisca=Comp=>{
  const [isShowingText, setIsShowingText]=useState(true)
  useEffect(()=>{
    const toggle = setInterval(() => {
        setIsShowingText(!isShowingText)
    }, 1000);
  })

}


export default function TabOneScreen() {
  return(
    <View style={styles.container}>


      <Contador inicial={100}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flexGrow:1,gap:10,justifyContent:'center',alignItems:'center',backgroundColor:"#1532c181"}
});
