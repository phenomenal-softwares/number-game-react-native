import { Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: deviceWidth < 360 ? 16 : 24,
  },
});
