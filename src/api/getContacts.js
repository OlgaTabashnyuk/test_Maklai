import axios from 'axios';
import { checkDateRange } from '../utils/checkDateRange';

const BASE_URL = 'https://fakerapi.it/api/v1/persons';

const getAllContacts = (startDate, endDate) => {
  const dateRange = checkDateRange(startDate, endDate);

  return axios.get(
    `${BASE_URL}?_birthday_start=${dateRange.startDate}&_birthday_end=${dateRange.endDate}`
  );
};
export default getAllContacts;
