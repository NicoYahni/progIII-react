import React,{Component} from 'react';
import './header.css'
import Formulario from '../Formulario/Formulario.js'


class Header extends Component{
      constructor(props){
        super(props)
        this.state = {
           
        }
      }



  render(){ 
    console.log(this.props)
  return(
    <header className = "Header">
    <h1 className="titulo">AFTERLIFE</h1>


    <div className='acciones'>
      <i className="fas fa-th"></i>
      <i className="fas fa-align-justify"></i>

              <button type="button" className="boton" onClick={ ()=>this.props.cambiar()}>Cambiar Vista</button>
              <button type="button" className="boton" onClick={ ()=>this.props.orden()}>Cambiar Orden</button>
              <button type="button" className="boton" onClick={ ()=>this.props.agregar()}>Cargar más canciones</button>
              <button type="button" className="boton" onClick={ ()=>this.props.reiniciar()}>Resetear canciones</button>


              < Formulario filtrar={(texto)=> this.props.filtrar(texto)} />
              </div>
</header>
      
  )
  
}
}


export default Header;