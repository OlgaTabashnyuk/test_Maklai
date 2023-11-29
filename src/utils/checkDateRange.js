export const checkDateRange = (startDate, endDate) => {
  const dateRange = { startDate, endDate };

  if (startDate > endDate) {
    const date = startDate;

    bday.startDate.value = endDate;
    dateRange.startDate = endDate;
    bday.endDate.value = date;
    dateRange.endDate = date;
  }

  return dateRange;
};
