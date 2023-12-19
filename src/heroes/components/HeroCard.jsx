import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../HeroCard.css'

const CharacterByHero = ({ characters, alter_ego }) =>{
    // return <p>{ characters }</p>
    // if ( alter_ego === characters ) return (<></>)
    return ( alter_ego === characters )
    ? <></>
    : <p>{ characters }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
  return (
    <>
        <Link to={`/hero/${id}`} className="my-card animate__animated animate__fadeIn">
            <img src={`./assets/heroes/${id}.jpg`} className="" alt={superhero}/>
            <div className="profile-name">{superhero}</div>
            <div className="profile-position">{alter_ego}</div>
            <div className="profile-overview">
                <div className="profile-overview">
                    <div className="row">
                        <div className="col-ms-4">
                            <h3>{publisher}</h3>
                            <p>Primera aparición: <br />{first_appearance}</p>
                            {
                                // (alter_ego !== characters) && <p>{characters}</p>
                            }
                            <CharacterByHero characters={ characters } alter_ego = { alter_ego }/>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        
    </>
    )
}

CharacterByHero.propTypes = {
    characters: PropTypes.string.isRequired ,
    alter_ego: PropTypes.string.isRequired
}

HeroCard.propTypes ={
    id: PropTypes.string.isRequired,
    superhero: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
}
