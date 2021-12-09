import { IPatient } from "@ahryman40k/ts-fhir-types/lib/R4";
import { useContext, useState } from "react";
import {oauth2 as Smart} from 'fhirclient';
import patientContext from "../PatientContext";
import Client from "fhirclient/lib/Client";



const InputForm: React.FC = () => {

    const [patientId, setPatientId] = useState("");
    const {patient, setPatient} = useContext(patientContext);
    const [client, setClient] = useState<Client>();


    async function fetchData() {
        Smart.ready().then(client => {
            setClient(client)
            client?.request({
				url: "Patient/"+patientId,
				headers: {
                    'dips-subscription-key': process.env.REACT_APP_DIPS_SUBSCRIPTION_KEY!
                }
            }).then(patient => {
                setPatient(patient)
            })
        });
    }

    const handleSubmit = (e:React.SyntheticEvent) => {
        e.preventDefault();
        fetchData();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Patient id:
                <input type="text" onChange={e => setPatientId(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default InputForm;