import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButon from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 500) {
    imageSize = 80;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={[styles.imageConatiner, imageStyle]}>
        <Image
          style={styles.imgae}
          source={require("../assets/Images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your Phone needs <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButon onPress={onStartNewGame}>Start New Game</PrimaryButon>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  imageConatiner: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imgae: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
