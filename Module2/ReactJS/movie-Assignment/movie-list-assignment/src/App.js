//import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Movies from './components/Movies'
import Footer from './components/Footer'
import './css/Header.css'
import { 
  Route,
  HashRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header />
      <div><h1>Latest Films</h1></div>
      <HashRouter>
      <Route exact path="/" component={Movies} />
      <Route path="/LatestFlim" component={Movies} />
      <Route path="/Adventure" component={Movies}/>
      <Route path="/Thriller"  component={Movies}/>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
