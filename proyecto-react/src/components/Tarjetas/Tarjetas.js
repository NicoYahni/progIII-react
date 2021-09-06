import React, {Component} from 'react';
import Tarjeta from '../Tarjeta/Tarjeta.js'

class Tarjetas extends Component{
    constructor(){
        super();
        this.state = {
            personajes:[],
            isLoaded: false,
            nextUrl: '',            
        }
    }

    componentDidMount(){
        //console.log("me monté");
        let url = 'https://rickandmortyapi.com/api/character';
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                console.log('lo de arriba es la data y abajo es el next');
                console.log(data.info.next);
                this.setState({
                    personajes: data.results,
                    isLoaded: true,
                    nextUrl:data.info.next,
                })
            })
            .catch( e => console.log(e))
    }

    addMore(){
        //ir a buscar a la API
        let url = this.state.nextUrl
        fetch(url)
            .then( response => response.json())
            .then( data => {
                console.log(data);
                
                this.setState({
                    nextUrl: data.info.next,
                    //Sumarlos al array 
                    personajes: this.state.personajes.concat(data.results)
                })
            })
            .catch( e => console.log(e))

        
    }

    deleteCard(personajeABorrar){
        let personajesQueQuedan = this.state.personajes.filter( personaje => personaje.id !== personajeABorrar)
        
        this.setState({
            personajes: personajesQueQuedan
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
                    this.state.personajes.map( (personaje, idx) => <Tarjeta key={personaje.name + idx} dataPersonaje={personaje} remove={(id)=>this.deleteCard(id)}/>)
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