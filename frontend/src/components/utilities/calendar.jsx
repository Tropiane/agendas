import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function viewCalendar() {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');

    const getAvailableHours = (selectedDate) => {
        const daysOfWeek = selectedDate.getDay();
        let hours = [];

        if(daysOfWeek === 0 || daysOfWeek === 6) {
            hours = Array.from({length: 9}, (_, i) => {
                const hour = i +10;
                return [`${hour}:00`, `${hour}:30`];
            }).flat();
        }else{
            hours = Array.from({length: 13}, (_, i) => {
                const hour = i + 8;
                return [`${hour}:00`, `${hour}:30`];
            }).flat();
        }
        return hours;
    }

    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
  
    const handleDateChange = (newDate) => {
      setDate(newDate);

    };

    const availableHours = getAvailableHours(date);

    return (
      <>
      <div className='calendarContainer'>
        <h3>Agendate</h3>
        <div className='calendar'>
          <Calendar onChange={handleDateChange} value={date} className={"calendarDate"}/>
                <p>
                  Fecha seleccionada: {date.toDateString()} {time}
                </p>
          <div className='hoursContainer'>
            {availableHours.map((hour, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="time"
                  value={hour}
                  checked={time === hour}
                  onChange={handleTimeChange}
                />
                {hour}
              </label>
            ))}
          </div>
        </div>
        
      </div>  
      </>
    );
}
export default viewCalendar