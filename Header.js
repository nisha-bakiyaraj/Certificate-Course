import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from  'react-native';

const Header = () => {
  return (
  <ImageBackground
  source={{uri: 'https://png.pngtree.com/background/20210711/original/pngtree-cartoon-hand-drawn-beauty-makeup-festival-literary-little-fresh-girl-white-picture-image_1121260.jpg'  }}
    style={styles.image}
>
   

    <View style={styles.header}>
     
      <Text style={styles.headerText}>Professional Online Makeup Course</Text>
      <Text style={styles.subText}>Certification Programme</Text>
      <Text style={styles.rating}>Rated 4.8/5</Text>
      <Text style={styles.featureText}>India's No.1 Online Makeup Course</Text>
      <Text style={styles.featureText}>Learn by LIVE Do-it-Together Classes</Text>
      <Text style={styles.featureText}>Unlimited Practice Session to master skills</Text>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
  },
  rating: {
    fontSize: 14,
    color: 'gold',
    textAlign: 'center',
  },
  featureText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 2,
  },
  image:{
    flex:1,
    width: '100%',
    height: '100%',
    justifyContent: 'clearInterval',
    
  },

});


export default Header;