import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground} from 'react-native';

const Section = ({ title, features, imageUri }) => {
  return (
    <ImageBackground
  source={{uri: 'https://m.media-amazon.com/images/I/51REXNocAwL._AC_UF894,1000_QL80_.jpg'}}
  style={styles.image1}>
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {features.map((feature, index) => (
        <Text key={index} style={styles.sectionFeature}>{feature}</Text>
      ))}
      {imageUri && <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/319/943/non_2x/a-luxurious-black-certificate-template-with-a-modern-design-perfect-for-beauty-education-eyelash-or-makeup-artists-elegant-and-abstract-ideal-for-awards-or-educational-achievements-not-ai-free-vector.jpg'}} style={styles.certificate} />}
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyButtonText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionFeature: {
    fontSize: 14,
    marginVertical: 2,
    textAlign: 'center',
  },
  applyButton: {
    backgroundColor: '#ff69b4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  certificate: {
    width: 200,
    height: 300,
    marginVertical: 10,
  },
image1: {
  flex:1,
    width: '100%',
    height: '100%',
    justifyContent: 'clearInterval',
}
});

export default Section;

