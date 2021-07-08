import React, { useContext } from 'react';
import AccidentForm from './accident-form.view';
import AccidentFormContext from 'contexts/accident-form.context';
import Accident from 'models/accident.model';

export default function AccidentCreate(){
  const context = useContext(AccidentFormContext);
  return(
    <AccidentForm title='Reportar accidente' accident={context.accident} />
  )
}