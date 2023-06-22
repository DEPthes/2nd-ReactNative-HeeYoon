import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState();
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      enteredGoalText,
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputConatiner}>
        <TextInput
          placeholder="your goals here!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
        />
        <Button title="add egoal" onPress={addGoalHandler} />
      </View>
      <View />
      <FlatList
        data={courseGoals},
        renderItem={(itemData => {
          return(
                <View style={styles.goalItem}>
                  <Text style={styles.goalText}>{goal}</Text>
                </View>
              ));
          )
        })}
      / >
        </View>
    </View>
  );
}
//주석 for commit
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 16,
  },

  inputConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "blue",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "red",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    marginTop: 24,
  },

  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "purple",
  },

  goalText: {
    color: "white",
  },
});
