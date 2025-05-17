import { Text, StyleSheet, Dimensions, Platform } from 'react-native';

function Title ({ children }) {
  return <Text style={styles.title}>{children}</Text>
}

export default Title;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 360 ? 18 : 24,
    color: "white",
    textAlign: 'center',
    borderWidth: Platform.select({ web: 0, default: 2 }),
    borderColor: "white",
    padding: deviceWidth < 360 ? 6 : 12,
    marginTop: deviceWidth < 360 ? 12 : 24,
  },
});