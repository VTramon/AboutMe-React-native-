import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const Animations = () => {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/arcane.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/avatar.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/bersek.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/cowboy_bebop.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/full_metal.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/death_note.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/one_piece.jpeg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/invincible.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/silent_voice.jpeg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/steven.webp')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/violet_evergarden.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/animation/wotakoi.jpg')}
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

export default Animations;
