import { useContext } from "react";
import { DataContext } from "../../useContext/DataProvider";
import Patients from "./Patients";


const LitadoDePacientes = () => {

    const {patients} = useContext(DataContext);

    


    return (
        <div className="containerPatients ">
            <div className="titleLitadoDePacientes">
                {
                    patients.length>0?
                        <div>
                             <h2 > Registros de pacientes: {patients.length}</h2>
                             <p>Administra tus <span> pacientes</span></p>
                        </div>
                    :<div>
                        <h2>no hay pacientes</h2> 
                        <p>Comienza agregando pacientes<span> pareceran en este lugar</span></p>
                     </div> 
                    
                }
                
                
               
            </div>


            {
                patients?.map(patient=>(
                    <Patients key={patient.id} patient={patient}/>
                ))
            }

          
        </div>
    );
};

export default LitadoDePacientes;