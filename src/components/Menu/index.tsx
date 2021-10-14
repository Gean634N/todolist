import * as C from './style';

type Props = {
  handleButtons: { 
    handleRemove: () => void,
    handleRemoveAllDone: () => void,
    clearAll: () => void,
  },
}


export const Menu = ({ handleButtons }: Props) => {
  const { handleRemove, handleRemoveAllDone, clearAll } = handleButtons;

  return (
    <C.Container>
      <button className="action__buttom" onClick={ handleRemove }>Remove</button>
      <button className="action__buttom" onClick={ handleRemoveAllDone }>Remove All</button>
      <button className="action__buttom" onClick={ clearAll }>Clear All</button>
      <button className="action__buttom">Save</button>
    </C.Container>
  );
}