import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
       <Text style={styles.numberText}>{children}
        </Text> 
        </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 360 ? 12 : 24,
    margin: deviceWidth < 360 ? 12 : 24,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 360 ? 24 : 36,
    fontFamily: 'open-sans-bold',
  },
});