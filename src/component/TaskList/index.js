import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const TaskList = ({
  tasks,
  loading,
  noData,
  show,
  delTask,
  taskCompleted,
  viewTask,
}) => {
  if (!show) {
    return null;
  }
  if (!loading && noData) {
    return <Text style={style.bodyText}>No Data Found</Text>;
  }
  if (loading) {
    return <Text style={style.bodyText}>Loading...</Text>;
  }

  return (
    <>
      <Text style={style.taskHeading}>Task List</Text>
      <ScrollView style={style.listContainer}>
        <View style={style.listHolder}>
          {tasks.map((task, index) => (
            <View key={`task_box_${task.title}`} style={style.taskBox}>
              <Text
                style={[
                  style.taskTitle,
                  task.completed ? style.completed : null,
                ]}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {index + 1} . {task.title}
              </Text>
              <View style={style.buttonWidget}>
                <TouchableOpacity
                  style={[style.button, task.completed ? style.disabled : null]}
                  onPress={() => taskCompleted(task)}
                  disabled={task.completed}>
                  <Text style={style.buttonText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.button}
                  onPress={() => viewTask(task)}>
                  <Text style={style.buttonText}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={style.button}
                  onPress={() => delTask(task)}>
                  <Text style={style.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};
const style = StyleSheet.create({
  listContainer: {},
  listHolder: {
    marginVertical: 20,
  },
  taskTitle: {
    fontSize: 16,
    color: '#272c4c',
    maxWidth: '50%',
    overflow: 'hidden',
  },
  taskHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#272c4c',
  },
  taskBox: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonWidget: {
    flexDirection: 'row',
    width: '50%',
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
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'green',
  },
  disabled: {
    backgroundColor: '#808080',
  },
});

export default TaskList;
