import {  useContext, useEffect, useState } from "react";
import { DataContext } from "../../useContext/DataProvider";


const Formulario = () => {


    const { nombre,setNombre, propietario,  setPropietario,email, setEmail,alta, setAlta,sintomas, setSintomas,patients, setPatients,setEditPatient,editPatient} = useContext(DataContext);
    const [error, setError] = useState(false);



    
    const generarId=()=>{
        const randonId=Math.random().toString(36).substring(2)
        const dateId=Date.now().toString(36) 

        return randonId+dateId
    }
    
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        if ([nombre,propietario,email,alta,sintomas].includes('') ) {
            setError(true)
            return
        }

            setError(false)
            const objectPatient={
                nombre,
                propietario,
                email,
                alta,
                sintomas,
           
            }

        
            if (editPatient[0]) {
                //editar paciente

                objectPatient.id=editPatient[0].id;
                const objetoPacienteActualizado=patients.map(paciente=>paciente.id===editPatient[0].id?objectPatient:paciente)
                setPatients(objetoPacienteActualizado)
      
            }else{
                //agregar paciente
                
                objectPatient.id=generarId()
                setPatients([...patients,objectPatient]) 
            }
               
            
        

        setNombre('')
        setPropietario('')
        setAlta('')
        setSintomas('')
        setEmail('')
        setEditPatient({})

}


  

return (
        <div className="containerForm">
            <div className="titleForm">
                <h2>Seguimiento de Pacientes </h2>    
                <p>añade Pacientes y <span>administralos</span></p> 
            </div>  
            
            <form className="informationContainer" onSubmit={handleSubmit}>

                {error&& 
                    <div className="errorMessage"><p>Todos los campos son obligatorios</p></div>
                }

                <div className="inputContainer">
                    <label className="label" htmlFor="nombre"> NOMBRE MASCOTA </label>
                      <input className="input" type="text" id="nombre" placeholder="Nombre de la mascota" value={nombre} onChange={(e)=>setNombre(e.target.value    )}/>
                </div>
                 <div className="inputContainer">
                    <label className="label" htmlFor="propietario"> NOMBRE PROPIETARIO </label>
                      <input className="input" type="text" id="propietario" placeholder="Nombre del propietario" value={propietario} onChange={(e)=>setPropietario(e.target.value   )}/>
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="email"> EMAIL </label>
                      <input className="input" type="Email" id="email" placeholder="email del propietario" value={email} onChange={(e)=>setEmail(e.target.value )}/>
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="alta"> ALTA </label>
                      <input className="input" type="date" id="alta" placeholder="dd/mm/aaaa" value={alta} onChange={(e)=>setAlta(e.target.value    )}/>
                </div>
                <div className="inputContainer">
                    <label className="label" htmlFor="sintomas"> SÍNTOMAS </label>
                      <input className="input" type="text" id="sintomas" placeholder="describe sintomas" value={sintomas} onChange={(e)=>setSintomas(e.target.value )}/>
                </div>
                    
                     {
                        editPatient[0]? <button className="button" >EDITAR PACIENTE</button>:<button className="button" >AGREGAR PACIENTE</button>
                     }
            </form>     
        </div>
    );
};

export default Formulario;