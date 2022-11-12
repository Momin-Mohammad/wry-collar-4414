import './App.css';
import Footer from './Components/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <AllRoutes />
       <Footer/>
      </header>
    </div>
  );
}

export default App;
