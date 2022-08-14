import DateDisplay from '../DateDisplay/DateDisplay';
import './DateContainer.css'
import { useEffect, useState } from 'react';
import moment from 'moment'
const DateContainer = () => {
    const [date, setDate] = useState(Date.now())
    
    useEffect(() => {
        console.log('rerenderd')
    }, [ date ])

    return ( 
        <>
            <input type="date" 
                   className="date-input" 
                   onChange={ (e) => setDate(e.target.value) } 
             />
            { console.log(date) }
            <DateDisplay date={ date }/>
        </>
    );
}
 
export default DateContainer;