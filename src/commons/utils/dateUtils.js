import { DateTime } from 'luxon';

export const isDatePassed = (dateString) => {
  const currentDate = DateTime.local();
  const paramDate = DateTime.fromISO(dateString);

  return currentDate >= paramDate;
};
