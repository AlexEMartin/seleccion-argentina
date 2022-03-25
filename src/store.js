import { createStore } from 'redux'
import imagenes from './assets/img/imagenes'


const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: 'Dibu Martinez',
            foto: imagenes.img1
        },
        {
            id: 2,
            nombre: 'Pezzella',
            foto: imagenes.img2
        },
        {
            id: 3,
            nombre: 'Huevo',
            foto: imagenes.img3
        },
        {
            id: 4,
            nombre: 'Montiel',
            foto: imagenes.img4
        },
        {
            id: 5,
            nombre: 'Paredes',
            foto: imagenes.img5
        },
        {
            id: 6,
            nombre: 'Lo Celso',
            foto: imagenes.img6
        },
        {
            id: 7,
            nombre: 'De Paul',
            foto: imagenes.img7
        },
        {
            id: 8,
            nombre: 'Ocampo',
            foto: imagenes.img8
        },
        {
            id: 9,
            nombre: 'Lautaro',
            foto: imagenes.img9
        },
        {
            id: 10,
            nombre: 'D10S',
            foto: imagenes.img10
        },
        {
            id: 11,
            nombre: 'Di Maria',
            foto: imagenes.img11
        },
        {
            id: 12,
            nombre: 'Armani',
            foto: imagenes.img12
        },
        {
            id: 13,
            nombre: 'Otamendi',
            foto: imagenes.img13
        },
        {
            id: 14,
            nombre: 'Romero',
            foto: imagenes.img14
        },
        {
            id: 15,
            nombre: 'Nico Gonzalez',
            foto: imagenes.img15
        },
        {
            id: 16,
            nombre: 'Dybala',
            foto: imagenes.img16
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if (action.type === 'AGREGAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === 'AGREGAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === 'QUITAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === 'QUITAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }


    return state
}

export default createStore(reducerEntrenador)