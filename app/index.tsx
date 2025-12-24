import { Button, StyleSheet, TextInput, View ,Text,ScrollView,FlatList} from 'react-native';
import React from 'react';
import GoalItem from '@/components/GoalItem';
import GoalInput from '@/components/GoalInput';



export default function Index() {
  const [list,setList] = React.useState<Array<{item:string,id:string}>>([]);
  const [modalstate,setModalState] = React.useState(false);

  const Add = (note:string)=>{
    console.log(note);
    setList((prev)=>([...prev,{item:note,id:Math.random().toString()}]));
    console.log(list)

  }
  const Delete = (id:string)=>{
    setList((prev)=>{
      return prev.filter((item)=>id!== item.id)
    })
  }

  const modalActive = ()=>{
    setModalState(!modalstate)
  }



  return (
    <View style={styles.container}>
      <Button onPress={modalActive} color="blue" title="Click Me" />
      <GoalInput buttonPressed={Add} active={modalstate}/>
      
      <GoalItem goals={list} deleteitem={Delete} />
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
