import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TaskModal = ({task, delTask, taskCompleted, close}) => {
  if (!task.title) {
    return null;
  }
  return (
    <View style={style.modalContainer}>
      <View style={style.modal}>
        <Text style={style.taskHeading}>View Task</Text>
        <View style={style.modalBody}>
          <Text style={style.lable}>Task Title : </Text>
          <Text style={style.title}>{task.title}</Text>
          <View style={style.descriptionBox}>
            <Text style={style.lable}>Task Description : </Text>
            <Text style={style.description}>{task.description}</Text>
          </View>
        </View>
        <View style={style.buttonWidget}>
          <TouchableOpacity
            style={[style.button, task.completed ? style.disabled : null]}
            onPress={() => taskCompleted(task)}
            disabled={task.completed}>
            <Text style={style.buttonText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.button} onPress={() => close()}>
            <Text style={style.buttonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              delTask(task);
              close();
            }}>
            <Text style={style.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  modalContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    padding: 20,
    width: '80%',
    minHeight: 350,
    alignItems: 'flex-start',
    backgroundColor: '#ebf4f4',
    justifyContent: 'flex-start',
  },
  taskHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#272c4c',
  },
  lable: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  title: {
    fontSize: 16,
    color: '#272c4c',
    height: 20,
  },
  modalBody: {
    marginTop: 20,
  },
  descriptionBox: {
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    color: '#272c4c',
  },
  buttonWidget: {
    marginTop: 'auto',
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#272c4c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 12,
    color: '#fff',
  },
  disabled: {
    backgroundColor: '#808080',
  },
});

export default TaskModal;
