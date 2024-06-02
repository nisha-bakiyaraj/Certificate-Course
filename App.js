import React from 'react';
import { ScrollView, StyleSheet,Image } from 'react-native';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import SocialMedia from './SocialMedia';
const App = () => {
  return (
    <ScrollView style={styles.container}>
<Header/>
<Form/>
<Section title="Why Should You Join Airblack?" features={[
        "Do-it-together, live on zoom",
        "4.8/5 Rated Classes",
        "35000+ Members",
      ]} />
      <Image source={{ uri: ''}} style={styles.certificate} />
      <Section title="Get Certified From India’s Biggest Beauty Platform" features={[
        "Join our growing community of 35,000+ alumni"
      ]} imageUri="https://example.com/certificate.png" />
      <SocialMedia />




  
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});

export default App;