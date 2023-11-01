import getAllContacts from './contacts/getContacts';
import refs from './contacts/refs';
import contactCard from './contacts/contactCard.hbs';
import Handlebars from 'handlebars';

Handlebars.registerHelper('cutWebSite', string => {
  return string.replace('http://', '');
});

function createMarkup(ref, value) {
  ref.insertAdjacentHTML('beforeend', value);
}

bday.onsubmit = async event => {
  event.preventDefault();
  refs.contactsList.innerHTML = '';

  const startDate = bday.start_date.value;
  const endDate = bday.end_date.value;

  const contacts = await getAllContacts(startDate, endDate);

  createMarkup(refs.contactsList, contactCard(contacts.data));
};
