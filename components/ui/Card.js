import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/Colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 360 ? 12 : 36,
    padding: deviceWidth < 360 ? 10 : 16,
    width: "90%",
    maxWidth: 400,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    elevation: 5,
    shadowColor: Colors.primary600,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
