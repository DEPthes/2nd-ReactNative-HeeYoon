import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import Colors from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import ListItem from "../components/UI/ListItem";
import { useState } from "react";

export default function Home() {
  const [itemList, setitemList] = useState([
    {
      itemImage: require("../assets/images/ming.png"),
      itemName: "민영은이 먹다 남긴 연세우유 말차생크림빵",
      itemLocation: "남가좌동 - 4시간전",
      itemPrice: 5300,
    },
    {
      itemImage: require("../assets/images/ming.png"),
      itemName: "민영은이 먹다 남긴 연세우유 말차생크림빵",
      itemLocation: "남가좌동 - 4시간전",
      itemPrice: 5300,
    },
    {
      itemImage: require("../assets/images/ming.png"),
      itemName: "민영은이 먹다 남긴 연세우유 말차생크림빵",
      itemLocation: "남가좌동 - 4시간전",
      itemPrice: 5300,
    },
    {
      itemImage: require("../assets/images/ming.png"),
      itemName: "민영은이 먹다 남긴 연세우유 말차생크림빵",
      itemLocation: "남가좌동 - 4시간전",
      itemPrice: 5300,
    },
    {
      itemImage: require("../assets/images/ming.png"),
      itemName: "민영은이 먹다 남긴 연세우유 말차생크림빵",
      itemLocation: "남가좌동 - 4시간전",
      itemPrice: 5300,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>남가좌동</Text>
        <View style={styles.iconConatiner}>
          <Feather
            name="search"
            size={24}
            color="white"
            style={styles.iconStyle}
          />
          <Feather
            name="menu"
            size={24}
            color="white"
            style={styles.iconStyle}
          />
          <Fontisto
            name="bell"
            size={24}
            color="white"
            style={styles.iconStyle}
          />
        </View>
      </View>
      <View style={styles.listView}>
        <FlatList
          data={itemList}
          renderItem={(taskData) => {
            return (
              <View>
                <ListItem
                  itemImage={taskData.item.itemImage}
                  itemName={taskData.item.itemName}
                  itemLocation={taskData.item.itemLocation}
                  itemPrice={taskData.item.itemPrice}
                />
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
        />
      </View>
      <View style={styles.writeWidget}>
        <Text style={styles.writeWidgetText}>+ 글쓰기</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
  },
  titleStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 12,
  },
  iconConatiner: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconStyle: {
    marginLeft: 12,
  },
  listView: {
    paddingBottom: 80,
  },
  writeWidget: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 10,
    bottom: 70,
    height: 50,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.orange,
  },
  writeWidgetText: {
    color: "white",
    fontWeight: "600",
    fontSize: "18",
  },
});
