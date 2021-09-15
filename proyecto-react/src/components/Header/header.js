import React,{Component} from 'react';
import './header.css'
import Formulario from '../Formulario/Formulario.js'


class Header extends Component(){
      constructor(props){
        super(props)
        this.state = {
            cambiar: ""
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

              {/* <button type="button" className="boton" onClick={ ()=>this.props.cambiar}>Cambiar Vista</button> */}
              {/* <button type="button" className="boton" onClick={ ()=>this.ordenAlfabetico()}>Cambiar Orden</button>
              <button type="button" className="boton" onClick={ ()=>this.addMore()}>Cargar más canciones</button>
              <button type="button" className="boton" onClick={ ()=>this.reset()}>Resetear canciones</button>


              < Formulario filtrar={(texto)=> this.filterCard(texto)} /> */}
              </div>
</header>
      
  )
  
}
}


export default Header;