//Found inmation for calendar at: https://www.geeksforgeeks.org/how-to-add-calendar-in-nextjs/

import Calendar from 'react-calendar';
import { useState } from 'react';

export default function AppointmentCalendar(){
    const [date, setDate] = useState(new Date)
    return(
        <div>
            <Calendar
            onChange={() => {
                setDate
                alert(`You have no appoinment booked for ${date}`)
            }}
            value={date}
            ></Calendar>
        </div>
    )
}