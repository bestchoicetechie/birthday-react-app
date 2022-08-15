
import './BirthdayList.css';
import birthdayItems from '../Data';
import {useState} from 'react';

// 1. declare a clearAll variable and initialize as true using useState.
// 2. declare a clear function to toggle the clearAll variable
// 3. the onClick value in the button to be set to the clear function.
// 4. use conditional statement to display the two interfaces.

const BirthdayList = ({item}) => {
    const [clearAll, setClearAll] = useState(true);
   

    function clear(){
        return setClearAll(!clearAll);
    }

  return (
    clearAll ? <div className='birthday-container'>
         <div className='heading'>We Have {birthdayItems.length} Birthdays Today</div>
        
        {item.map((birthday) =>{
            const {id, image, name, age} = birthday;
            return (
                <div className="birthday-inner" key={id} >
                <img src={image} alt={name} />
                <div className="content">
                    <h3>{name}</h3>
                    <p>{age} Years </p>
                </div>

            </div>
            )
        })}
            <button type='submit' onClick={clear}>Clear All</button>

    </div> : 
    <div className='birthday-container'>
        <h1 className='empty'>0 Birthdays Today</h1>
        <button onClick={clear}>Birthday List is Empty</button>
    
    </div>
  );
};

export default BirthdayList