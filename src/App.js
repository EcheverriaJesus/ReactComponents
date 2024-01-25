import './App.css';
import Navbar from './components/NavBar/NavBar';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import ToggleSwitchWithText from './components/ToggleSwitch/TogleSwitchWithText';
import TxtAreaStatic from './components/Inputs/TxtAreaStatic';
import Card1 from './components/Card/Card1';
import Contador from './components/Contador/Contador';
import Stars from './components/Starts/Starts';
import Header from './components/Header/Header';
import Buttom1 from './components/Buttom/Buttom1';
import Button2 from './components/Buttom/Button2';
import Button3 from './components/Buttom/Button3';
import Tooltip1 from './components/Tooltip/Tooltip1';

function App() {
  return (
    <div className='flex flex-col justify-center'>
    <Navbar />
      <div className='flex flex-col gap-4 pt-20'>
        <ToggleSwitch />
        <ToggleSwitchWithText />
        <TxtAreaStatic />
        <Card1 />
        <Contador /> 
        <Stars />
        <Buttom1 />
        <Button2 />
        <Button3 />
        <Tooltip1 />
      </div>
      <div>
        <Header />
      </div>
    </div>
  );
}

export default App;
