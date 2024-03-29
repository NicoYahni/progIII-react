import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta.js'
import "./Tarjetas.css"
import Header from "../Header/header.js"

class Tarjetas extends Component{
    constructor(){
        super();
        this.state = {
            tracksOriginal:[],
            tracksManipulables:[],
            masTracks:[],
            isLoaded: false,
            cantidad: 0,
            flexRow: true,
            ordenAlfabetico: "normal"
          
                        
        }
    }

    componentDidMount(){
        //console.log("me monté");
        let url =  `https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=12`
       
        // 
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
            
        fetch(`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks?index=${this.state.cantidad}&limit=12`)
            
        //`https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.cantidad}`
            .then( response => response.json())
            .then( data => {
                // console.log(data);
                
                this.setState({
                    
                    //Sumarlos al array 
                    
                    tracksManipulables: this.state.tracksManipulables.concat(data.data),
                    masTracks: this.state.tracksManipulables.concat(data.data)
                    
                })
                
            },console.log(this.state.tracksManipulables))
            .catch( e => console.log(e))
            
        })
        

        
    }
    reset(){
        this.setState({
            tracksManipulables: this.state.tracksOriginal,
            cantidad: 0
        })
    }

    deleteCard(trackABorrar){
        let tracksQueQuedan = this.state.tracksManipulables.filter( track => track.id !== trackABorrar)
        
        this.setState({
            tracksManipulables: tracksQueQuedan
        })
    }
    filterCard(textoAFiltrar){
        let personajesFiltrados = this.state.masTracks.length === 0 ?
        this.state.tracksOriginal.filter( track => track.title.toLowerCase().includes(textoAFiltrar.toLowerCase())||track.artist.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        :
        this.state.masTracks.filter( track => track.title.toLowerCase().includes(textoAFiltrar.toLowerCase())||track.artist.name.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            tracksManipulables: personajesFiltrados
        })
    }
    changeFlexToColumn(){
        if (this.state.flexRow === true) {
         this.setState({
             flexRow: false
         })
        } 
     }
     changeFlexToRow(){
        if (this.state.flexRow === false) {
         this.setState({
             flexRow: true
         })
        } 
     }
     ordenAlfabetico(){
        if (this.state.ordenAlfabetico === "normal") {
         this.setState({
             ordenAlfabetico: "invertido",
             tracksManipulables: this.state.tracksManipulables.reverse()
             
         })
        } else {
         this.setState({
             ordenAlfabetico: "normal",
             tracksManipulables: this.state.tracksManipulables.sort()
         })
        }
     }

    render(){
         //console.log('Me rendericé');
         //console.log(this.state.personjes);
        return(
          <div className='contenedor-body'>
              <Header estadoFlex = {this.state.flexRow}cambiarAFila={ ()=>this.changeFlexToRow()} cambiarAColumna={ ()=>this.changeFlexToColumn()} orden={ ()=>this.ordenAlfabetico()} agregar={ ()=>this.addMore()} reiniciar={ ()=>this.reset()} filtrar={ (nicoY)=>this.filterCard(nicoY)}/>

               <section className={`card-container ${this.state.flexRow ? "fila" : "columna"}`}>
               { 
                    this.state.isLoaded === false ?
                    <img src="img/loading.gif" alt="Cargando..."/> :

                    this.state.tracksManipulables.length == 0 ?
                    <p> No hay datos que coincidan con su búsqueda </p> :
                    
                    this.state.tracksManipulables.map( (track, idx) => <Tarjeta segundos= {(track.duration -(Math.floor(track.duration / 60)*60))<10 ? 
                        `0`+(track.duration - (Math.floor(track.duration / 60)*60)):
                        track.duration - (Math.floor(track.duration / 60)*60)} minutos ={Math.floor(track.duration / 60)} key={track.title + idx} dataTrack={track}   remove={(id)=>this.deleteCard(id)}/>)
                    
                    
                      
                   
               }
                 
            
              </section>
           </div>
        )
    }
}

export default Tarjetas;



{/* <section className="card-container">
        <button type="button">Cargar más tarjetas</button>
            < Tarjeta />
            
        </section> */}