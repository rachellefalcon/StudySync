import { View, Text, FlatList, StyleSheet } from 'react-native';

const dummyMatches = [
  { id: '1', name: 'Alex Johnson' },
  { id: '2', name: 'Jamie Rivera' },
  { id: '3', name: 'Taylor Nguyen' },
];

export default function MatchesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Matches</Text>
      <FlatList
        data={dummyMatches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.matchCard}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No matches yet. Start swiping!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },
  matchCard: {
    backgroundColor: '#E5E7EB',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
});
