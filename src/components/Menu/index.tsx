import * as C from './style';

type Props = {
  handleButtons: { handleRemove: () => void },
}


export const Menu = ({ handleButtons }: Props) => {
  const { handleRemove } = handleButtons;

  return (
    <C.Container>
      <button className="action__buttom" onClick={ handleRemove }>Remove</button>
      <button className="action__buttom">Remove All</button>
      <button className="action__buttom">Clear All</button>
      <button className="action__buttom">Save</button>
    </C.Container>
  );
}