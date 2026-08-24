
import React,{useState} from "react"
import {Button, Text} from 'react-native'

import Estilo from "./Estilo"


export default Comp =>{
    let [num, setNum]=useState(Comp.inicial)  
    
    // const inc=()=>setNum(num++)
    const dec=()=>setNum(num--)

    return(
        <>
            <Text style={Estilo.fontGrande}>{ num }</Text>
            <Button title=" + " onPress={()=>{setNum(num++)}} color={'#a70f0f67'}/>
            <Button title=" - " onPress={dec} color={'#23085285'}/>
        </>
    )

}