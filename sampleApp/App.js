import React, {useState} from 'react';
import Datehead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import Todolist from './components/Todolist';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const today = new Date();
  
  const [todos, setTodos] = useState([
    {id : 1, text : '작업환경 설정', done : true},
    {id : 2, text : '리액트 네이티브 기초 공부', done : false},
    {id : 3, text : '투두 리스트 제작', done : false}
  ])

  const onInsert = text => {
    const nextId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id : nextId,
      text,
      done : false
    };
    
    setTodos(todos.concat(todo));
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView edges = {['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios : 'padding', android : undefined})}
          style={styles.avoid}>
        <Datehead date={today}/>
        {todos.length === 0 ? <Empty/> : <Todolist todos={todos}/>}
        <AddTodo onInsert={onInsert}/>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block : {
    flex : 1,
    backgroundColor : 'white'
  },
  avoid : {
    flex : 1
  }
});

export default App;
