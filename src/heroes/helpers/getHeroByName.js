
import { heroes } from '../data/heroes';

export const getHeroByName = ( name = '' ) => {
    console.log(name)
    // Para quitar los espacios en blanco y volver todo a minusculas 
    name = name.toLocaleLowerCase().trim()
    console.log(name)
    if (name.length === 0 ) return []; 
    
    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes( name )
    );
}

