import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const TVShows = () => {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/how_i_met_your_mother.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/euphoria.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/band_of_brothers.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/big_bang.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/friends.webp')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/got.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/loki.png')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/stranger_things.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/umbrella_academy.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/vikings.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/tv/wanda_vision.webp')}
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

export default TVShows;
