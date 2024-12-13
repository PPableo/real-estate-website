//Found inmation for calendar at: https://www.geeksforgeeks.org/how-to-add-calendar-in-nextjs/
'use client';
import Calendar from 'react-calendar';
import { useState } from 'react';

export default function AppointmentCalendar(){
    return(
        <main className="pt-24 pb-16">
            <div>
                <Calendar
                onChange={() => {
                    alert(`You have no appoinment booked for that date`)
                }}
                value={date}
                ></Calendar>
            </div>
        </main>
    )
}