import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Form = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <TextInput style={styles.input} placeholder="Enter your WhatsApp Number" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Select your profession" />
      <TextInput style={styles.input} placeholder="Select your goal" />
      <TextInput style={styles.input} placeholder="Select your city" />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#ff69b4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Form;