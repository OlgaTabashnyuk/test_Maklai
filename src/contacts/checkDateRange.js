export const checkDateRange = (startDate, endDate) => {
  const dateRange = { startDate, endDate };

  if (startDate > endDate) {
    const date = startDate;
    bday.start_date.value = endDate;
    dateRange.startDate = endDate;
    bday.end_date.value = date;
    dateRange.endDate = date;
  }
  return dateRange;
};
