import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const Singers = () => {
  return (
    <ScrollView style={styles.view}>
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/billie.png')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/bruno.webp')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/dua_lipa.jpeg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/imagine_dragons.jpeg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/demi.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/ariana.webp')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/black_pink.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/lucas.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/coldplay.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/ed_sheeran.webp')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/justin.jpg')}
        />
      </View>

      <View style={styles.card}>
        <Image
          style={styles.img}
          source={require('../../../public/singer/maroon5.jpeg')}
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
    resizeMode: 'cover',
  },
});

export default Singers;
