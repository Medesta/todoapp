import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './src/component/TaskInput';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TaskList from './src/component/TaskList';
import TaskModal from './src/component/TaskModal';

const STORAGE_KEY = 'taskList';

const App = () => {
  const [title, setTitle] = useState('');
  const [viewTask, setViewTask] = useState({});
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const [addTask, setAddTask] = useState(false);
  const [data, setData] = useState([]);
  const readData = async () => {
    try {
      setLoading(true);
      const task = await AsyncStorage.getItem(STORAGE_KEY);
      setLoading(false);
      if (task !== null) {
        setData(JSON.parse(task));
        setNoData(false);
      } else {
        setNoData(true);
      }
    } catch (e) {
      setLoading(false);
      setNoData(true);
    }
  };
  const saveData = async () => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify([...data, {title, description, completed: false}]),
      );
      setTitle('');
      setDescription('');
      setAddTask(false);
      // alert('Data successfully saved');x
      readData();
    } catch (e) {
      // alert('Failed to save the data to the storage');
    }
  };

  const delTask = async task => {
    const temp = data.filter(e => e.title !== task.title);
    setData([...temp]);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...temp]));
      // alert('Data successfully deleted');
      readData();
    } catch (e) {
      // alert('Failed to delete the data');
    }
  };
  const taskCompleted = async task => {
    const temp = data.map(e => {
      if (e.title === task.title && !task.completed) {
        e.completed = true;
        return e;
      }
      return e;
    });
    setData([...temp]);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([...temp]));
      // alert('Data successfully updated');
      readData();
    } catch (e) {
      // alert('Failed to update the data');
    }
  };

  const taskReview = task => {
    setViewTask(task);
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    if (!loading && !data.length) {
      setNoData(true);
      return;
    }
    setNoData(false);
  }, [data, loading]);

  return (
    <>
      <View style={style.headerContainer}>
        <Text style={style.subtext}>Welcome,</Text>
        <Text style={style.appTitle}>TO DO APPLICATION</Text>
      </View>
      <View style={style.body}>
        <TaskInput
          title={title}
          description={description}
          setDescription={setDescription}
          setTitle={setTitle}
          saveData={saveData}
          show={addTask}
        />
        <TaskList
          tasks={data}
          loading={loading}
          noData={noData}
          show={!addTask}
          delTask={delTask}
          taskCompleted={taskCompleted}
          viewTask={taskReview}
        />

        <TouchableOpacity
          style={style.addButton}
          onPress={() => setAddTask(!addTask)}>
          {addTask ? (
            <Text style={style.addText}>X</Text>
          ) : (
            <Text style={style.addText}>+</Text>
          )}
        </TouchableOpacity>
      </View>
      <TaskModal
        close={() => setViewTask({})}
        task={viewTask}
        delTask={delTask}
        taskCompleted={taskCompleted}
      />
    </>
  );
};

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
    position: 'relative',
    backgroundColor: '#ebf4f4',
  },
  addButton: {
    position: 'absolute',
    width: 40,
    height: 40,
    backgroundColor: '#272c4c',
    bottom: 10,
    right: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
    color: '#fff',
    lineHeight: 35,
  },
});

export default App;
