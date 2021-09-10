import React, {Component} from 'react';


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
              <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.filtrarPor}
              placeholder={this.state.filtrarPor} /> 
              

            </form>
        );
    }
}

export default Formulario