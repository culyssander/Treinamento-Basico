import './App.css'
import Footer from './components/Footer'
import Main from './components/Main';
import Nav from './components/Header';

function App() {
   return (
    <div className="conteiner">
        <Nav />
        <Main/>
        <Footer />
    </div>
   );
}

export default App;