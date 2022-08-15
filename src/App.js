
import './App.css';

import BirthdayList from './Components/BirthdayList';
import birthdayData from './Data'
import { useState } from 'react';


function App() {

 
  const [birthday, setBirthday] = useState(birthdayData)


  return (
    <div className="birthday-page">
      
      <BirthdayList item={birthday} />
      
  
    </div>
  );
}

export default App;
