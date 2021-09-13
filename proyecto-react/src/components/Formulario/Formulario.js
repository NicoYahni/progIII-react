import React, {Component} from 'react';
import "./Formulario.css"


class Formulario extends Component{
    constructor(props){
        super(props)
        this.state = {
          filtrarPor : ''
          
        }
    }
    
    evitarDefault(evento){
      evento.preventDefault();
    }

    controlarCambios(event){
      this.setState({
        filtrarPor: event.target.value
      }, ()=> this.props.filtrar(this.state.filtrarPor)
      )
    }

    render(){
        return (
            <form action="" onSubmit={(evento) => this.evitarDefault(evento)}>
               <i className="fas fa-search fa-xs"></i>
              <input className="buscador" type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.filtrarPor}
              placeholder="busque por titulo o artista" /> 
              

            </form>
        );
    }
}

export default Formulario