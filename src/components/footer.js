import React, {Component} from 'react';
import '../style/footer.css';

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            contato: '51 9876-54321',
            email: 'fulano@email.com',
            ano: 2020,
            autor: 'Fulanito Corp.',
        };
    }
    
    render(){
        return(
            <footer className="footer border">
                <p>Fale Conosco: Telefone: {this.state.contato} - E-mail: {this.state.email}</p>
                <p>Copyright@{this.state.ano} - {this.state.autor}</p>
            </footer>
        );
    }
}

export default Footer;
