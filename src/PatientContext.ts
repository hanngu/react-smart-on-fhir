import { IPatient } from "@ahryman40k/ts-fhir-types/lib/R4";
import { createContext, Dispatch, SetStateAction } from "react";

interface IPatientContext {
    patient: IPatient,
    setPatient: Dispatch<SetStateAction<IPatient>>

}

const patientContext = createContext<IPatientContext>(undefined!);

export default patientContext;