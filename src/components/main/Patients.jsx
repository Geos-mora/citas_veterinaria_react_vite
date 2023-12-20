import PropTypes from 'prop-types'
import { useContext, useEffect } from 'react';
import { DataContext } from '../../useContext/DataProvider';

const Patients = ({patient}) => {

    const {setPatients, patients,setEditPatient,editPatient,setNombre,setPropietario,setEmail,setAlta,setSintomas,} = useContext(DataContext);
    const {nombre,propietario,email,alta,sintomas}=patient

    const handleDelete=()=>{
      const deletePatients=patients.filter(obj=>obj.id!==patient.id)
        setPatients(deletePatients)  
    }
    
    const handleEdit=()=>{
     const filterPatient=patients?.filter(item=>patient.id===item.id&&patient)
      setEditPatient(filterPatient)
    }

    useEffect(() => {
       if (editPatient[0]) {
        setNombre(editPatient[0].nombre)
        setPropietario(editPatient[0].propietario)
        setEmail(editPatient[0].email)
        setAlta(editPatient[0].alta)
        setSintomas(editPatient[0].sintomas)
       }
    }, [editPatient]);

    
    
    
    return (
            <div className="listPatients">
            <div className="owner">
                <p>NOMBRE:  <span> { nombre} </span> </p>
                <p>PROPIETARIO:  <span> { propietario} </span> </p>
                <p>EMAIL:  <span> { email} </span> </p>
                <p>FECHA DE ALTA: <span> { alta} </span> </p>
                <p>SÍNTOMAS:  <span> { sintomas} </span> </p>
            </div> 
             <div className='buttons-Edit-Delete'>
                <button className='edit' onClick={()=>{handleEdit()}}>EDITAR</button>
                <button className='delete' onClick={()=>handleDelete()}>ELIMINAR</button>
             </div>
        </div>
    );
};

export default Patients;

Patients.propTypes={
    patient:PropTypes.object.isRequired
}