import React, {Component} from 'react'; 
let list = [
    {name: 'Fulanildus', email: 'fulanildus@email.com'},
    {name: 'Ciclanildus', email: 'ciclanildus@email.com'}
];

class Sobre extends Component {

    constructor(props){
        super();
        this.state = {
            text: props.text,
            name: 'Fulanitus'
        };
        
        this.setName = this.setName.bind(this);
        this.resetName = this.resetName.bind(this);
    }
    
    setName(){
        this.setState(
            {name: 'Ciclanildus'}
        );
    }

    resetName(){
        this.setState(
            {name: 'Fulanitus'}
        );
    }

    render(){
        return(
        <div id="sobre" className="py-5 bg-success">
            <h1>Sobre</h1>
            <p>{this.state.text}</p>
            <p>Eu sou o {this.state.name}</p>
            <button onClick={this.setName}>Mudar nome</button> <button onClick={this.resetName}>Resetar Nome</button>
        </div>
        );
    }
}

export default Sobre;