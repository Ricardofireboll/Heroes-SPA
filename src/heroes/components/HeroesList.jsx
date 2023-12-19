import PropTypes from 'prop-types'
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './'
import { useMemo } from 'react'

export const HeroesList = ({ publisher }) => {
    const heroes = useMemo( () =>  getHeroesByPublisher(publisher), [ publisher ])
    
    return (
        <>
        <div className='row row-cols-1 row-cols-md-3 g-3'>
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id } 
                        { ...hero }/>
                ))
            }
        </div>
        </>
    )
}

HeroesList.propTypes ={
    publisher: PropTypes.string.isRequired
}