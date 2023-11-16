
import { useEffect } from 'react';
import './App.css';
import Layout from './Component/Layout/Layout';
import Aos from 'aos';

function App() {

  useEffect(()=>{
    Aos.init()
  },[])
  return (
   <Layout  />
  );
}

export default App;
