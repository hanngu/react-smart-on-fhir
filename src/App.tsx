import { IPatient } from '@ahryman40k/ts-fhir-types/lib/R4';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Container';
import Launch from './Launch';
import patientContext from './PatientContext';

const App: React.FC = () => {
  const [patient, setPatient] = useState<IPatient>(undefined!);

  console.log("Patient: ", patient);

  return (
    <patientContext.Provider value = {{patient: patient, setPatient: setPatient}} >
      <Router>
        <Routes>
          <Route path="/" element={<Launch/>}/>
          <Route path="/app" element={<Container/>}/>
        </Routes>
      </Router>
    </patientContext.Provider>

  )
}

export default App;