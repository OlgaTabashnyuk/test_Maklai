import getAllContacts from './api/getContacts';
import refs from './contacts/refs';
import contactCard from './template/contactCard.hbs';
import Handlebars from 'handlebars';

Handlebars.registerHelper('cutWebSite', string => {
  return string.replace('http://', '');
});

function createMarkup(ref, value) {
  ref.insertAdjacentHTML('beforeend', value);
}

bday.onsubmit = async event => {
  try {
    event.preventDefault();
    refs.contactsList.innerHTML = '';

    const startDate = bday.startDate.value;
    const endDate = bday.endDate.value;

    const contacts = await getAllContacts(startDate, endDate);
    createMarkup(refs.contactsList, contactCard(contacts.data));
  } catch (error) {
    console.log(error.message);
  }
};
