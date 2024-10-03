import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert
} from "react-native";
import { Colors } from "./Colors";
import { useGameState } from "./useGameState";
import Board from "./Board";

const X = require("../assets/X.png");
const O = require("../assets/O.png");

export default function Game() {
  const { square, colors, winner, handleClick, reset } = useGameState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tic-Tac-Toe</Text>
	  <Board />
	<Pressable style={styles.button} onPress={reset} >
		<Text style={styles.buttonText}> Restart </Text>
	</Pressable>
    </View>
  );
}

//S tyles Go Here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blue,
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
	fontSize: 55,
	fontWeight: "bold"
  },
  button: {
	backgroundColor: Colors.teal,
	padding: 10,
	borderRadius: 7,
	marginTop: 10,
  },
  buttonText: {
	fontSize: 16,
  }

});
