import './App.css';
import AllRoutes from './Routes/AllRoutes';

function App() {
  window.document.title = "Timely App"
  return (
    <div className="App">
      <header className="App-header">
       <AllRoutes />
      </header>
    </div>
  );
}

export default App;
