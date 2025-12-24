import { View, Text, FlatList, StyleSheet,Pressable, } from 'react-native'
import React from 'react'

interface props{
    goals : Array<{item:string,id:string}>;
    deleteitem : (id:string)=>void;
}

const GoalItem = ({goals,deleteitem}:props) => {
        
  return (
    
    <FlatList style={styles.two} showsVerticalScrollIndicator={true} 
          data={goals} renderItem={(itemData)=>{
            return (
                
            <Pressable onPress={() => deleteitem(itemData.item.id)} 
            style={({pressed})=> pressed && styles.press}
            >
                <Text style={styles.goalitem} >{itemData.item.item}</Text>
                </Pressable>
                )
          }}
          keyExtractor={(item)=>{return item.id}} >
            
          </FlatList>
          
  )
}
const styles = StyleSheet.create({
    two:{
        flex:1,
        borderTopWidth:3,
        borderTopColor:"black",
        
        width:"100%",
    
      },
      goalitem:{
        padding:5,
        fontSize: 20,
        backgroundColor:"white",
        margin:10,
        borderRadius:10
    
      },
      press: {
        backgroundColor:"grey",
      }

})

export default GoalItem