import React, { createContext, useContext, useState, useEffect } from "react";

const ENDPOINT = process.env.REACT_APP_API_URL;
const API = process.env.REACT_APP_API;
const k = process.env.REACT_APP_API_KEY;

console.log('SOY TU PADRE', k)

const APIContext = createContext({})


export const ApiContextProvider = ({children}) => {
  const [ data, setData ] = useState(null)
  const [coordinates, setCoordinates] = useState([47.44, 3.16])

    useEffect(() =>{
        fetch(`${ENDPOINT}weather?lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${API}`)
        .then((response) => response.json())
        .then( (weather) => {
          setData(weather)
          console.log(weather)
        });
      },[]);
// el Provider recibe un parametro más que es el estado se lo ponemos con value
      return <APIContext.Provider value={data}>{children}</APIContext.Provider>;
};


export const useApi = () => {
    const context = useContext(APIContext);
    if (context === undefined) {
        return 'Ya valio raza, try again more late please :)';
    }
    // if (context === null) {
    //     return 'loading....';
    // }
    return context;
}
