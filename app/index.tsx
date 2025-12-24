import { Button, StyleSheet, TextInput, View ,Text,ScrollView,FlatList} from 'react-native';
import React from 'react';
import GoalItem from '@/components/GoalItem';
import GoalInput from '@/components/GoalInput';



export default function Index() {

  const [note,setNote] = React.useState("");
  const [list,setList] = React.useState<string[]>([]);

  const Add = (note:string)=>{
    console.log(note);
    setList((prev)=>([...prev,note]));
    console.log(list)

  }

  const pressed = () =>{
    
  }

  const textChange = (enterdText:string) =>{
    setNote(enterdText)
  }

  return (
    <View style={styles.container}>
      <GoalInput buttonPressed={Add}/>
      
      <GoalItem goals={list} />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  
  
});
