import { View, Text ,TextInput,Button, StyleSheet,Modal} from 'react-native'
import React from 'react';

interface props{
    buttonPressed : (note:string)=>void;
    active:boolean;
}

const GoalInput = ({buttonPressed,active}:props) => {
    const [note,setNote] = React.useState("");
    const pressed = () =>{
        buttonPressed(note);
        setNote("");
      }
    
      const textChange = (enterdText:string) =>{
        setNote(enterdText)
      }
  return (
    <Modal visible={active} style={styles.container}>
   <View style={styles.one}>
   
           <TextInput
             style={{ color: "black", fontSize: 20,backgroundColor: 'red',borderRadius:15,padding:5,width:"80%", marginRight:3}}
             placeholder="Your Course Goal"
             placeholderTextColor="black"
             value={note}
             onChangeText={textChange}
           />
           <Button title="Hello" onPress={pressed} />
         </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:40,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
    one: {
        flexDirection:"row",
        padding:10,
        marginTop:50,
        marginBottom:10,
        justifyContent: 'center',
        alignItems:"center"
      },
})

export default GoalInput