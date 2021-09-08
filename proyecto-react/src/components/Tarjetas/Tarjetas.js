import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta.js'

class Tarjetas extends Component{
    constructor(){
        super();
        this.state = {
            tracks:[],
            isLoaded: false,
            cantidad: 10,
                        
        }
    }

    componentDidMount(){
        //console.log("me monté");
        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.cantidad}`
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
                    tracks: data.data,
                    isLoaded: true
                    // nextUrl:data.next,
                })
            })
            .catch( e => console.log(e))
    }

    addMore(){
        this.setState({
            cantidad : this.state.cantidad +10
        },()=>{
            
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks&top?limit=${this.state.cantidad}`)
            .then( response => response.json())
            .then( data => {
                // console.log(data);
                
                this.setState({
                    
                    //Sumarlos al array 
                    tracks: data.data
                })
            })
            .catch( e => console.log(e))
        })
        

        
    }

    // deleteCard(trackABorrar){
    //     let tracksQueQuedan = this.state.tracks.filter( track => track.id !== trackABorrar)
        
    //     this.setState({
    //         tracks: tracksQueQuedan
    //     })
    // }

    render(){
         //console.log('Me rendericé');
         //console.log(this.state.personjes);
        return(
          <React.Fragment>
              <button type="button" onClick={ ()=>this.addMore()}>Cargar más tarjetas</button>
               <section className="row card-container">
               { 
                    this.state.isLoaded === false ?
                    <p>Cargando...</p> :
                    
                    this.state.tracks.map( (track, idx) => <Tarjeta key={track.title + idx} dataTrack={track}   remove={(id)=>this.deleteCard(id)}/>)
                    
                    
                      
                   
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