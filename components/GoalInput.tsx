import { View, Text ,TextInput,Button, StyleSheet} from 'react-native'
import React from 'react';

interface props{
    buttonPressed : (note:string)=>void;
}

const GoalInput = ({buttonPressed}:props) => {
    const [note,setNote] = React.useState("");
    const pressed = () =>{
        buttonPressed(note);
      }
    
      const textChange = (enterdText:string) =>{
        setNote(enterdText)
      }
  return (
   <View style={styles.one}>
           <TextInput
             style={{ color: "black", fontSize: 20,backgroundColor: 'red',borderRadius:15,padding:5,width:"80%", marginRight:3}}
             placeholder="Your Course Goal"
             placeholderTextColor="black"
             onChangeText={textChange}
           />
           <Button title="Hello" onPress={pressed} />
         </View>
  )
}

const styles = StyleSheet.create({
    one: {
        flexDirection: 'row',
        padding:10,
        marginBottom:10,
        justifyContent: 'center',
      },
})

export default GoalInput