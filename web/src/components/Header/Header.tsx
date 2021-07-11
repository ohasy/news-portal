import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';
interface HeaderProps {}
const Header: React.FC<HeaderProps> = ({ children }) => {
  const history = useHistory();
  const onClickLogo = () => history.replace('/');
  return (
    <header>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={onClickLogo}
        onClick={onClickLogo}
      >
        <img
          className="dogo-img"
          src={'/images/dogo.png'}
          alt={'Doggo'}
          width="90"
          height="90"
        />
        <h1>Newzie</h1>
      </div>
      {children}
    </header>
  );
};
export default Header;
