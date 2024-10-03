import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Square from "./Square";
import { Colors } from "./Colors";
import { useGameState } from "./useGameState";

export default function Board() {
	const { square, colors, winner, handleClick } = useGameState();
	const map=square.map
	return (
		<View style={styles.Board}>

		</View>
	)
}

const styles = StyleSheet.create({
	Board: {
		marginTop: 20,
		marginBottom: 10,
	}
})