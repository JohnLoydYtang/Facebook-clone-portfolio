import NavBarJs from './components/navbar/Navbar';
import HeaderJs from './parts/Header/Header';
import { MDBContainer } from 'mdb-react-ui-kit';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarJs />
      <HeaderJs />
    </div>
  );
}

export default App;
