import contactsActions from "./contact-actions";
import axios from "axios";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";
const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  //fetch("http://localhost:2000/contacts");
  // console.log("contact", contact);

  axios
    .post("/contacts", { name, number })
    .then((response) => {
      console.log("resrtduytfuy", response.data);
      dispatch(
        contactsActions.addContactSuccess({
          name,
          number,
          id: response.data.name,
        })
      );
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => {
      console.log("data", data);

      const keys = Object.keys(data);
      const newData = keys.reduce((acc, key) => {
        acc.push({ id: key, ...data[key] });
        return acc;
      }, []);
      console.log("newData", newData);
      dispatch(contactsActions.fetchContactsSuccess(newData));
    })
    // })
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());
  axios
    .delete(`contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};
export default {
  addContact,
  fetchContacts,
  removeContact,
};
