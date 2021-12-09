import { useContext } from "react";
import InputForm from "./Components/InputForm";
import patientContext from "./PatientContext";

const Container: React.FC = () => {

    const {patient} = useContext(patientContext);


    console.log(patient);


    return(
        <>
            <h1>Search by patient national identity number: </h1>
            <h3>Example of test patient: 14019800513</h3>
            <InputForm/>

            {patient !== undefined && 
                <div>
                    <h2>Name: {patient.name !== undefined ? patient.name[0].text : ""}</h2>
                    <h2>Date of birth: {patient.birthDate}</h2>
                </div>
            }
        </>
    );
}

export default Container;