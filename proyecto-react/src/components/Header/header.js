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
      <i className= {`fas fa-th icono-orden ${this.props.estadoFlex == false ? "show" : "hide"}`} onClick={ ()=>this.props.cambiarAFila()}></i>
      <i className={`fas fa-align-justify icono-orden ${this.props.estadoFlex == true ? "show" : "hide"}`} onClick={ ()=>this.props.cambiarAColumna()}></i>

              {/* <button type="button" className="boton-header" onClick={ ()=>this.props.cambiar()}>Cambiar Vista</button> */}
              
              <button type="button" className="boton-header" onClick={ ()=>this.props.agregar()}>Cargar más canciones</button>
              <button type="button" className="boton-header" onClick={ ()=>this.props.reiniciar()}>Resetear canciones</button>
              <button type="button" className="boton-header" onClick={ ()=>this.props.orden()}>Cambiar Orden</button>

              < Formulario filtrar={(texto)=> this.props.filtrar(texto)} />
              </div>
</header>
      
  )
  
}
}


export default Header;