import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SocialMedia = () => {
  return (
    <View style={styles.socialMedia}>
      <TouchableOpacity>
        <Image source={{ uri: 'https://static01.nyt.com/images/2016/05/11/us/12xp-instagram/12xp-instagram-articleLarge.jpg?quality=75&auto=webp&disable=upscale' }} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwKa8fxff9AwcEvnQFbASe-Ugjolzow2Xmg&s' }} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: 'https://images.template.net/100603/small-linkedin-icon-clipart-q5ttq.jpg' }} style={styles.socialIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={{ uri: 'https://img.freepik.com/premium-vector/twitter-global-social-media-networking-service-new-logo-twitter_944081-108.jpg' }} style={styles.socialIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  socialMedia: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
});

export default SocialMedia;

