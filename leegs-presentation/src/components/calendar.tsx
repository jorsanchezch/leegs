import React from 'react';
import ReactCalendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from 'styles/modules/Calendar.module.scss';

const Calendar = (props: CalendarProps) => {

    return (
      <ReactCalendar className={styles.calendar} {...props} />
    );
};

export default Calendar;