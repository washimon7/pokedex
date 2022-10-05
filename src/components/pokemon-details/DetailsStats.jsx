import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export const DetailsStats = ({ stats }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map(stat => (
        <View style={styles.stat} key={stat.stat.name}>
          <Text style={styles.statName}>{stat.stat.name}</Text>
          <Text style={styles.baseStat}>{stat.base_stat}</Text>
          <View style={styles.barBg}>
            <View
              style={[
                styles.bar,
                {
                  backgroundColor: stat.base_stat >= 60 ? '#129800' : '#ff8b00',
                  width: `${stat.base_stat}%`,
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 8,
  },
  stat: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'center',
  },
  statName: {
    flexBasis: 140,
    color: 'grey',
    textTransform: 'capitalize',
  },
  baseStat: {
    flexBasis: 36,
  },
  barBg: {
    flex: 1,
    backgroundColor: '#cecece',
    height: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  bar: {
    backgroundColor: '#dd0001',
    width: '0%',
    height: '100%',
  },
});

DetailsStats.propTypes = {
  stats: PropTypes.array,
};
