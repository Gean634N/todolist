import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
  onEnter: (taskName: string) => void;
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }

  const handleClick = () => {
    if (inputText !== '') {
      onEnter(inputText);
      setInputText('');
    }
  }
  
  return (
    <C.Container>
      <div
        className="image"
        onClick={ handleClick }
      >
        ➕
      </div>

      <input 
        type="text"
        placeholder="Add a new task"
        value={inputText}
        onChange={ ({ target }) => setInputText(target.value) }
        onKeyUp={ handleKeyUp }
      />
    </C.Container>
  );
}