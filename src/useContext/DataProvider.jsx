import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'


export const DataContext=createContext();


const DataProvider=({children})=>{

  

    const [patients, setPatients] = useState([]);
    //guarda los datos de cada paciente en un array de objetos
 
    useEffect(() => {
        const  obtenerLS=()=>{
          const obtenerPaciente= JSON.parse(localStorage.getItem('pacientes'))??[];
          
          console.log('RESULTADO DE LA LLAMADA',obtenerPaciente);
          setPatients(obtenerPaciente)
          console.log('resultado despues del get',patients);
         }
        obtenerLS()
     }, []);

 useEffect(() => {
         localStorage.setItem('pacientes',JSON.stringify(patients))
     }, [patients]);


    const [editPatient, setEditPatient] = useState({});

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    return(
        <DataContext.Provider value={{
            nombre, 
            setNombre,
            propietario, 
            setPropietario,
            email, 
            setEmail,
            alta, 
            setAlta,
            sintomas, 
            setSintomas,
            patients,
            setPatients,
            editPatient, 
            setEditPatient
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;


DataProvider.propTypes={
    children:PropTypes.any
}


