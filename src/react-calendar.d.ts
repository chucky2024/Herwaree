// src/react-calendar.d.ts
declare module 'react-calendar' {
    import * as React from 'react';
    export interface CalendarProps {
      onChange: (value: Date | Date[] | [Date, Date] | null) => void;
      value: Date | Date[] | [Date, Date] | null;
      className?: string;
    }
    export default class Calendar extends React.Component<CalendarProps> {}
  }
  