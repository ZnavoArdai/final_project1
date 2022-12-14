
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/features/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
function App() {
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
