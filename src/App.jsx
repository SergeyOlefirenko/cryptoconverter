import './App.css';
import React, { createContext, useState } from "react";
import Converter from './components/Converter';
import SimpleConverter from './components/SimpleConverter';
import items from './data/data.json'
export const AppContext = createContext();
function App (){
  const [data, setData] = useState(items)
  const [simple, setSimple] = useState(false)
  const changeConverter = () => {
    setSimple(!simple);
  };
  const reloadHandler = () => {
    window.location.reload();
  }
  const style ={
color:'black'
  }
  return (
    <AppContext.Provider value={{
      data,
      setData
     }}>
      <div className='changeConverter'>
      <i class="bi bi-arrow-clockwise" onClick={reloadHandler}><p className='r'>Reload</p></i>
      <i className="bi bi-currency-bitcoin" onClick={changeConverter}>{simple ? <p className='c'>Converter</p>:<p style={style}>Simple converter</p>}</i>
      </div>
      {simple ? <SimpleConverter/> : <Converter/>}
     </AppContext.Provider>
  );
};

export default App;
