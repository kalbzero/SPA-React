import React, {Component} from 'react';
// import logo from './logo.svg'; 
import './App.css';
import Topo from './components/topo';
import Sobre from './components/sobre';
import Servicos from './components/servicos';
import Footer from './components/footer';
import Contato from './components/contato';

class App extends Component {
  render(){
    return(
      <div className="App">
        <Topo name="Fulano" ></Topo>
        <Sobre text="Projeto feito com React em Página única!"></Sobre>
        <Servicos></Servicos>
        <Contato></Contato>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
