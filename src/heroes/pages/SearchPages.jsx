import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm"
import { getHeroByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPages = () => {
  const navigate = useNavigate();
  // useLocation lo utilizamos para obtener el query parametro de la url, lo importamos de raact router dom y lo obtenemos de la localizacion donde nos encontramos en el html
  const location = useLocation();
  console.log(location);
  // Instalamos un paquete para que nos ayude a obtener el query paramero mas facilmente en caso de traer varios argumentos
  // yarn add query-string
  // Siempre recibe String
  // const query = queryString.parse( location.search )
  // Desestructuramos la q para obtener su valor
  const { q = '' } = queryString.parse( location.search )
  console.log(q);
  
  const heroes = getHeroByName(q);
  console.log(heroes)

  // Manera sin instalar un paquete 
  const searchParams = new URLSearchParams(location.search)
  const params = Object.fromEntries(searchParams.entries())
  console.log(params)


  // Mensajes condicionales
  // Esto nos retornara un valor boleano  
  const showSearch = ( q.length ===0 );
  const showError = ( q.length > 0 ) && heroes.length === 0 ;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    // if ( searchText.trim().length <= 1 ) return;
    // con el navigate podemos apuntar y navegar a la misma pantalla que estamos(``) y con un query parametro en la url agregando ?q=${searchText} 
    navigate(`?q=${searchText}`)
    console.log({ searchText })
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h3>Searching</h3>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input 
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange } 
            />
            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

        {/* Forma 1 de condicionales  */}
          {
            // ( q === '' )
            // ? <div className="alert alert-primary">Search a hero</div>
            // : ( heroes.length === 0 ) /*Si se cumple con && se ejecutara tambien podemos agregar otro ternario ?*/
            //   && <div className="alert alert-danger">No hero with <b>{ q }</b></div> 
          }
        {/* Forma 2 de condicionales  */}
        <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none' }}>
          Search a hero
        </div>
        <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}>
          No hero with <b>{ q }</b>
        </div>

          <div className="row" >
          {
            heroes.map( hero => (
              <HeroCard
                key={hero.id} { ...hero }
              />
            ))
          }
          </div>
          
        </div>
      </div>

    </>
  )
}
