
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/features/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loggedIn } from './store/userReducer';
function App() {
const dispatch=useDispatch()
  useEffect(()=>{

    if(localStorage.getItem("userId")){
      dispatch(loggedIn())
    }
  },[])
  return (
<>
<BrowserRouter>

<Header/>
<Router/>
</BrowserRouter>

</>
  );
}

export default App;
