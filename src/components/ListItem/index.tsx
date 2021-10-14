import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/item';
type Props = {
  item: Item,
  onChecked: (taskChecked: boolean, taskId: number) => void;
}

export const ListItem = ({ item, onChecked }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const handleCheck = (id: number, checked: boolean) => {
    onChecked(checked, id);
    setIsChecked(checked);
  }
  
  return (
    <C.Container done={isChecked} >
      <input 
        type="checkbox"
        checked={ item.done }
        onChange={ e => handleCheck(item.id, e.target.checked) }
      />
      <label>
        { item.name }
      </label>
    </C.Container>
  );
}