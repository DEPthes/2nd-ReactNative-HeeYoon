import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {
  const renderCategotyItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverView", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategotyItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
