import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importa los estilos

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
      <div className='calendar'>
        <h1>Selecciona una fecha y hora</h1>
        <Calendar onChange={handleDateChange} value={date} />
        <h2>Selecciona la hora:</h2>
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
        <p>
          Fecha seleccionada: {date.toDateString()} {time}
        </p>
      </div>
    );
}
export default viewCalendar