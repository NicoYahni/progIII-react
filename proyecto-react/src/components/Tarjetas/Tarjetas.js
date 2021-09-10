import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta.js'
import loading from '../loading.gif'
import "./Tarjetas.css"
import Formulario from "../Formulario/Formulario"

class Tarjetas extends Component{
    constructor(){
        super();
        this.state = {
            tracksOriginal:[],
            tracksManipulables:[],
            isLoaded: false,
            cantidad: 12,
            flexRow: true,
          
                        
        }
    }

    componentDidMount(){
        //console.log("me monté");
        let url = `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.cantidad}`
        //{`Artista:  ${this.props.dataTrack.artist.name}`}
        //https://rickandmortyapi.com/api/character
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data.data);
                console.log('lo de arriba es la data y abajo es el next');
                console.log(data.data);
                // console.log(data.next);
                this.setState({
                    tracksOriginal: data.data,
                    tracksManipulables: data.data,
                    isLoaded: true,
               
                    // nextUrl:data.next,
                })
            })
            .catch( e => console.log(e))
    }

    addMore(){
        this.setState({
            cantidad : this.state.cantidad +12
        },()=>{
            
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.cantidad}`)
            .then( response => response.json())
            .then( data => {
                // console.log(data);
                
                this.setState({
                    
                    //Sumarlos al array 
                    //
                    tracksManipulables: data.data
                })
            })
            .catch( e => console.log(e))
        })
        

        
    }
    reset(){
        this.setState({
            tracksManipulables: this.state.tracksOriginal
        })
    }

    deleteCard(trackABorrar){
        let tracksQueQuedan = this.state.tracksManipulables.filter( track => track.id !== trackABorrar)
        
        this.setState({
            tracksManipulables: tracksQueQuedan
        })
    }
    filterCard(textoAFiltrar){
        let personajesFiltrados = this.state.tracksOriginal.filter( track => track.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        
        this.setState({
            tracksManipulables: personajesFiltrados
        })
    }
    changeFlex(){
        if (this.state.flexRow === true) {
         this.setState({
             flexRow: false
         })
        } else {
         this.setState({
             flexRow: true
         })
        }
     }

    render(){
         //console.log('Me rendericé');
         //console.log(this.state.personjes);
        return(
          <React.Fragment>
              <button type="button" onClick={ ()=>this.changeFlex()}>Cambiar Vista</button>
              <button type="button" onClick={ ()=>this.addMore()}>Cargar más canciones</button>
              <button type="button" onClick={ ()=>this.reset()}>Resetear canciones</button>
              < Formulario filtrar={(texto)=> this.filterCard(texto)} />
            
               <section className={`card-container ${this.state.flexRow ? "fila" : "columna"}`}>
               { 
                    this.state.isLoaded === false ?
                    <img src={loading} alt="Cargando..."/> :

                    this.state.tracksManipulables.length == 0 ?
                    <p> No hay datos que coincidan con su búsqueda </p> :
                    
                    this.state.tracksManipulables.map( (track, idx) => <Tarjeta key={track.title + idx} dataTrack={track}   remove={(id)=>this.deleteCard(id)}/>)
                    
                    
                      
                   
               }
                 
            
              </section>
           </React.Fragment>
        )
    }
}

export default Tarjetas;



{/* <section className="card-container">
        <button type="button">Cargar más tarjetas</button>
            < Tarjeta />
            
        </section> */}