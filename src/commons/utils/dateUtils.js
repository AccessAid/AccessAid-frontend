import { DateTime } from 'luxon';

export const isDatePassed = (dateString) => {
  const currentDate = DateTime.local();
  const paramDate = DateTime.fromISO(dateString);

  console.log(
    '***currentDate, paramDate***',
    currentDate.toString(),
    paramDate.toString(),
  );
  return currentDate >= paramDate;
};
