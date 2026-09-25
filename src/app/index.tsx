import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.red}>just red</Text>

      <Text style={styles.bigBlue}>just bigBlue</Text>

      <Text style={[styles.bigBlue, styles.red]}>
        bigBlue, then red
      </Text>

      <Text style={[styles.red, styles.bigBlue]}>
        red, then bigBlue
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Читать далее</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
    padding: 20,
  },

  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  red: {
    color: 'red',
  },

  button: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 25,
    backgroundColor: 'black',
    borderRadius: 8,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});