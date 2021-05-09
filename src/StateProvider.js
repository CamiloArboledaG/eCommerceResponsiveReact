import { createContext, useContext, useReducer} from 'react';


{/** aqui se crea la capa del context api */}
export const StateContext = createContext();


{/** provee la herramienta que pasa los componentes de uno a otro */}
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


{/** Permite consumir desde cualquier cliente los cambios de estado del initialState */}
export const useStateValue = () => useContext(StateContext);
