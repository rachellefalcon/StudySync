import { View, Text, StyleSheet } from 'react-native';

//Where you swipe.
export default function SwipeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Swipe Students</Text>
      <Text style={styles.subtitle}>Swipe right to match, left to skip!</Text>
      {/* Later: Add swipe cards here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});
