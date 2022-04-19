import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const Movies = () => {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/cruella.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/batman.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/duna.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/fruitville_station.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/harry_potter.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/joker.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/king_richard.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/spider.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/the_king.webp')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/movie/whiplash.jpg')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#363636',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    // height: 'min',
    marginTop: 50,
    marginBottom: 50,
    // backgroundColor: 'white',
  },
  img: {
    width: '80%',
    height: 500,
    // height: 500,
    resizeMode: 'contain',
  },
});
export default Movies;
