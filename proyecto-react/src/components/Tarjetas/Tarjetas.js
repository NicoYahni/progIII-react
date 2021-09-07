import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta.js'

class Tarjetas extends Component{
    constructor(){
        super();
        this.state = {
            artistas:[],
            isLoaded: false,
            nextUrl: '',            
        }
    }

    componentDidMount(){
        //console.log("me monté");
        let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists';
        //https://rickandmortyapi.com/api/character
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data.data);
                console.log('lo de arriba es la data y abajo es el next');
                // console.log(data.next);
                this.setState({
                    artistas: data.data,
                    isLoaded: true
                    // nextUrl:data.next,
                })
            })
            .catch( e => console.log(e))
    }

    // addMore(){
    //     //ir a buscar a la API mas
    //     let url = this.state.nextUrl
    //     fetch(url)
    //         .then( response => response.json())
    //         .then( data => {
    //             // console.log(data);
                
    //             this.setState({
    //                 nextUrl: data.info.next,
    //                 //Sumarlos al array 
    //                 personajes: this.state.personajes.concat(data.results)
    //             })
    //         })
    //         .catch( e => console.log(e))

        
    // }

    deleteCard(artistaABorrar){
        let artistasQueQuedan = this.state.artistas.filter( artista => artista.id !== artistaABorrar)
        
        this.setState({
            artistas: artistasQueQuedan
        })
    }

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
                    this.state.artistas.map( (artista, idx) => <Tarjeta key={artista.name + idx} dataArtista={artista}   remove={(id)=>this.deleteCard(id)}/>)
                    
                    
                      
                   
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