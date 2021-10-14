import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { Menu } from './components/Menu';

const App = () => {
  const [list, setList] = useState<Item[]>([])

  const handleAddTask = (taskName: string) => {
    if (list.length === 0) { 
      setList([{
        id: 1,
        name: taskName,
        done: false,
        selectd: false,
      }])
    } else {
      let newList = [...list];
      newList.push({
        id: list[list.length -1].id + 1,
        name: taskName,
        done: false,
        selectd: false,
      });
      setList(newList)  
    }
  }

  const hendleChecked = (taskChecked: boolean, taskId: number) => {
    let newList = list.map((task) => {
      if (task.id !== taskId) return task;
      task.done = taskChecked;
      return task;
    });
    setList(newList);
  }

  const hendleClick = (taskSelected: boolean, taskId: number) => {
    let newList = list.map((task) => {
      if (task.id !== taskId) {
        task.selectd = false;
        return task;
      }
      task.selectd = taskSelected;
      return task;
    });
    setList(newList);
  }

  const handleRemove = () => {
    let newList = list.filter((task) => task.selectd !== true);
    setList(newList);
  }

  const handleButtons = {
    handleRemove,
  }

  return (
    <C.Container>
      <>
        <C.Area>
          <C.Header>Lista de tarefas</C.Header>

          <AddArea onEnter={ handleAddTask } />

          { list.map((item, index) => (
            <ListItem key={ index } item={ item } onChecked={ hendleChecked } labelClick={ hendleClick } />
          )) }
        </C.Area>
      </>

      <C.Area>
        <Menu handleButtons={ handleButtons } />
      </C.Area>
    </C.Container>
  );
}

export default App;
