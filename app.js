import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TaskInput from './app/component/TaskInput';

class App extends Component {
  render() {
    return (
      <>
        <View style={style.headerContainer}>
          <Text style={style.subtext}>Welcome,</Text>
          <Text style={style.appTitle}>TO DO APPLICATION</Text>
        </View>
        <View style={style.body}>
          <TaskInput />
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  headerContainer: {
    padding: 30,
    height: '30%',
    justifyContent: 'flex-end',
    backgroundColor: '#272c4c',
  },
  subtext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  appTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
  },
  body: {
    padding: 30,
    height: '70%',
    backgroundColor: '#ebf4f4',
  },
});

export default App;
