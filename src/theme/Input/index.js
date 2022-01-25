import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = ({...props}) => {
  return (
    <View style={style.inputHolder}>
      <TextInput style={style.textInput} {...props} />
    </View>
  );
};

const style = StyleSheet.create({
  inputHolder: {
    width: '100%',
    marginVertical: 10,
    borderWidth: 2,
    paddingHorizontal: 10,
    borderColor: '#272c4c',
  },
  textInput: {
    fontSize: 14,
    lineHeight: 16,
    color: '#272c4c',
    borderWidth: 0,
    paddingVertical: 5,
  },
});

export default Input;
