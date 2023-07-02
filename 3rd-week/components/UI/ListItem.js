import { StyleSheet, Text, View, Image } from "react-native";
import Colors from "../../constants/colors";

export default function ListItem({
  itemImage,
  itemName,
  itemLocation,
  itemPrice,
}) {
  return (
    <View style={styles.container}>
      <Image source={itemImage} resizeMode="cover" style={styles.image} />
      <View>
        <View style={styles.itemNameContainer}>
          <Text style={styles.itemName}>{itemName}</Text>
          <Text style={styles.itemLocation}>{itemLocation}</Text>
          <Text style={styles.itemPrice}>{itemPrice}원</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: "row",
    margin: 12,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
  },
  itemNameContainer: {
    width: 230,
    marginHorizontal: 12,
  },
  itemName: {
    fontSize: 20,
    color: "white",
  },

  itemLocation: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 3,
    color: Colors.locationColor,
  },
  itemPrice: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
});
