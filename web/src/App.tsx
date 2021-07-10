import ClickCounter from './components/ClickCounter';
import './style.css';

export const App = () => {
  return (
    <>
      <h1 className={'blue-text'}>
        React sasdcountr new App: {process.env.kbc}
      </h1>
      <img src={'images/dogo.png'} alt={'Doggo'} width="200" height="200" />
      <ClickCounter />
    </>
  );
};
