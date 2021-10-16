import * as C from './style';

type Props = {
  handleButtons: { 
    handleRemove: () => void,
    handleRemoveAllDone: () => void,
    handleClearAll: () => void,
    handleSaved: () => void,
  },
}


export const Menu = ({ handleButtons }: Props) => {
  const { handleRemove, handleRemoveAllDone, handleClearAll, handleSaved } = handleButtons;

  return (
    <C.Container>
      <button className="action__buttom" onClick={ handleRemove }>Remove</button>
      <button className="action__buttom" onClick={ handleRemoveAllDone }>Remove All</button>
      <button className="action__buttom" onClick={ handleClearAll }>Clear All</button>
      <button className="action__buttom" onClick={ handleSaved }>Save</button>
    </C.Container>
  );
}