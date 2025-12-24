import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

interface props{
    goals : string[];
}

const GoalItem = ({goals}:props) => {
  return (
    <FlatList style={styles.two} showsVerticalScrollIndicator={true} 
          data={goals} renderItem={(itemData)=>{
            return (<Text style={styles.goalitem}>{itemData.item}</Text>)
          }} >
      
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
    
      }

})

export default GoalItem