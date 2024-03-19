
import { TextInput, Text, View, TouchableOpacity} from "react-native"
import ResultImc from "./resumeImc"
import { useState } from "react"
import styles from "./style"


export default function Form(){

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")

    function ImcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
function validation(){
    if(weight != null && height != null){
         ImcCalculator()        
        setHeight(null)
        setWeight(null)
        setMessageImc(`Seu imc é igual:`)
        setTextButton("Calcular Novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("preencha o peso e altura")
}
    return(
        <View style={styles.formContext}  >
            <View style={styles.form} >
                <Text style={styles.formLabel} >Altura</Text>
                <TextInput style={styles.input}  onChangeText={setHeight} value={height} placeholder="Ex: 1.75" keyboardType="numeric"></TextInput>
                <Text style={styles.formLabel} >Peso</Text>
                <TextInput style={styles.input}  onChangeText={setWeight} value={weight} placeholder="Ex: 75.3" keyboardType="numeric"></TextInput>
                <TouchableOpacity style={styles.button} onPress={() => validation()}>
                    <Text style={styles.buttonText}>{textButton}</Text>
                    </TouchableOpacity> 
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    )
}