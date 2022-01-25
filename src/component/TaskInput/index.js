import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import TextInput from '../../theme/Input';
import TextBlock from '../../theme/TextBlock';

const TaskInput = ({
  title,
  setTitle,
  description,
  setDescription,
  saveData,
  show,
}) => {
  if (!show) {
    return false;
  }
  return (
    <>
      <Text style={style.taskHeading}>Add A New Task</Text>
      <ScrollView style={style.holder}>
        <TextInput
          placeholder="Enter Task Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextBlock
          placeholder="Enter Task Discription"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <TouchableOpacity
          style={style.button}
          disabled={!(title && description)}
          onPress={() => saveData()}>
          <Text style={style.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
const style = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272c4c',
  },
  taskHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#272c4c',
  },
  buttonText: {
    color: '#fff',
  },
  holder: {
    flex: 1,
  },
});

export default TaskInput;
