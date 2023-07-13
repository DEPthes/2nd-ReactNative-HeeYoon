import { useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectMeal = MEALS.find((meal) => meal.id === mealId);

  const headerButtonPressHandler = () => {
    console.log("Sibal");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectMeal.imageUrl }} />
      <Text style={styles.title}>{selectMeal.title}</Text>
      <MealDetails
        duration={selectMeal.duration}
        complexity={selectMeal.complexity}
        affordability={selectMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
