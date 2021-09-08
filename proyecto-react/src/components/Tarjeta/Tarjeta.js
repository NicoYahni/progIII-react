import React, {Component} from 'react';
import './Tarjeta.css';

class Tarjeta extends Component{
    constructor(props){
        super(props)
        this.state = {
          
        }
    }
    
    render(){
        // console.log(this.props);
        return (
          <article>
                <section className="navigation">
                    <div>
                        <i className="fas fa-chevron-left"></i>
                        <i className="fas fa-chevron-right"></i>
                    </div>
                    <i className="far fa-window-close"></i>
                </section>
                <main>
                    <img src={this.props.dataTrack.album.cover} alt=""/>
                    <h3>{this.props.dataTrack.title}</h3>
                    <p className="description"></p>
                    {/* <section className="aditional-info">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                    </section> */}
                    <a href="">Ver más</a>
                    <div className ='extra'>
                        <p> {`Artista:  ${this.props.dataTrack.artist.name}`}</p>
                        <p>{`Album: ${this.props.dataTrack.album.title}`} </p>
                    </div>
                  
                    <button className='more' onClick={ ()=>this.props.remove(this.props.dataTrack.id)}> Eliminar </button>
                
                </main>
            </article>
        );
    }
}

export default Tarjeta

// class Tarjeta extends Component{
//   constructor(props){
//       super(props)
//       this.state = {
        
//       }
//   }
  
//   render(){
//       console.log(this.props);
//       return (
//           <div className='character-card'>
//               <img src={this.props.dataPersonaje.image} alt="" />
//               <h4>{this.props.dataPersonaje.name}</h4>
//               <p>{this.props.dataPersonaje.status} - {this.props.dataPersonaje.species}</p>
//               <p className='more' onClick={ ()=>this.props.remove(this.props.dataPersonaje.id)}>Borrar</p>
//           </div>
//       );
//   }
// }