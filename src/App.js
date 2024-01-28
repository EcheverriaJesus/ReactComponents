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
import Search from './components/Inputs/Search';
import FormularioControlado from './components/Form/FormularioControlado';
import Modal1 from './components/Modal/Modal1';

function App() {
  return (
    <div className='flex flex-col justify-center'>
      <Navbar />
      <div className='flex flex-col gap-4 pt-20'>
        <Modal1 />
        <div className='flex justify-center'>
          <FormularioControlado />
        </div>
        <Search />
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
      <section className="bg-white dark:bg-gray-900">
                    <div className="container px-6 py-10 mx-auto animate-pulse">
                        <h1 className="w-48 h-2 bg-gray-200 rounded-lg dark:bg-gray-700">{''}</h1>

                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg sm:w-80 dark:bg-gray-700"></p>

                        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="w-full">
                                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">{''}</h1>
                                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>

                            <div className="w-full ">
                                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>
                                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">{''}</h1>
                                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>

                            <div className="w-full ">
                                <div className="w-full h-64 bg-gray-300 rounded-lg md:h-72 dark:bg-gray-600"></div>

                                <h1 className="w-56 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700">{''}</h1>
                                <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
                            </div>
                        </div>
                    </div>
                </section>
    </div>
  );
}

export default App;
