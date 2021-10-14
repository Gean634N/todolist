import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';
type Props = {
  item: Item,
  onChecked: (taskChecked: boolean, taskId: number) => void,
  labelClick: (taskSelected: boolean, taskId: number) => void;
}

export const ListItem = ({ item, onChecked, labelClick }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  // const [selected, setSelected] = useState(false);

  const handleCheck = (id: number, checked: boolean) => {
    onChecked(checked, id);
    setIsChecked(checked);
  }

  const  hendleClick = () => { 
    labelClick(!item.selectd, item.id);
  }
  
  return (
    <C.Container done={isChecked} selected={item.selectd} >
      <input 
        type="checkbox"
        checked={ item.done }
        onChange={ e => handleCheck(item.id, e.target.checked) }
      />
      <label
        onClick={ hendleClick }
        onDoubleClick={ () => handleCheck(item.id, !isChecked) }
      >
        { item.name }
      </label>
    </C.Container>
  );
}