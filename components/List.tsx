import { View, Text,StyleSheet } from 'react-native'
import AntDesign from "@expo/vector-icons/AntDesign";
type ListProps = {
  id: number
  message: string 
  isDone: boolean
  changeStatus: (id: number) => void
  undoStatus: (id:number) =>void
}
const List = ({ id, message, isDone,changeStatus,undoStatus }: ListProps) => {
   
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            textDecorationLine: isDone ? "line-through" : "none",
            color: isDone ? "gray" : "black",
          },
        ]}
      >
        {message} 
      </Text>
      <Text>
        {isDone ? (
          <AntDesign name="close" size={24} color="black"  style={{opacity:0.5}} onPress={()=>undoStatus(id)}/>
        ) : (
          <AntDesign name="check" size={24} color="black" style={{opacity:1}} onPress={()=>changeStatus(id)}/>
        )}
      </Text>
    </View> 
  );
}

export default List

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 10,
  }
})