import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import TextInput from '../../theme/Input';
import TextBlock from '../../theme/TextBlock';

const TaskInput = () => {
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({title, description});
      await AsyncStorage.setItem('tasks', jsonValue);
      alert('success');
    } catch (e) {
      alert('error');
    }
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('tasks');
      if (value !== null) {
        setData(value);
      }
    } catch (e) {
      // error reading value
    }
  };
  console.log(data, 'value');

  return (
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
        onPress={() => storeData()}>
        <Text style={style.buttonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272c4c',
  },
  buttonText: {
    color: '#fff',
  },
  holder: {
    flex: 1,
  },
});

export default TaskInput;
