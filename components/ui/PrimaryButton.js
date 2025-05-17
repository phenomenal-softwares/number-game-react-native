import { View, Pressable, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function PrimaryButton({ children, onPress }) {
  
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 8,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddinVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: Colors.primary500,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    padding: 8,
    fontSize: 14,
    fontFamily: "open-sans-bold",
  },
  pressed: {
    opacity: 0.75,
  },
});
