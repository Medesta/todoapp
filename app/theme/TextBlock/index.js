import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const TextBlock = ({...props}) => {
  return (
    <View style={style.inputHolder}>
      <TextInput
        multiline={true}
        numberOfLines={6}
        style={style.textInput}
        {...props}
      />
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
    borderWidth: 0,
    lineHeight: 16,
    color: '#272c4c',
    textAlignVertical: 'top',
  },
});

export default TextBlock;
