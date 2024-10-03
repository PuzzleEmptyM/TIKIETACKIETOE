import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
  } from "react-native";
import { Colors } from "./Colors";
import { useGameState } from "./useGameState";


export default function Square() {
	const { square, colors, winner, handleClick } = useGameState();
	return (
		<Pressable style={styles.square} onPress={handleClick}>
			
		</Pressable>
	)
}

const styles = StyleSheet.create({
	square: {
		borderWidth: 2,
		backgroundColor: Colors.blueLight,
		borderColor: Colors.teal,
		width: 125,
		height: 125 
	}
})