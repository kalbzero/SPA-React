import React, {Component} from 'react'; 

class Topo extends Component {
    render(){
        return(
            <header id="home">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#servicos">Servicos</a>
                    <a href="#parceiros">Parceiros</a>
                    <a href="#contato">Contato</a>
                </nav>
            </header>
        );
    }
}

export default Topo;