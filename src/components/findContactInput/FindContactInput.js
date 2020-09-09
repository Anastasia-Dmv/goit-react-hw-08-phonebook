import React from "react";
import { connect } from "react-redux";
import contactActions from "../../redux/contact/contact-actions";
import contactSelectors from "../../redux/contact/contact-selectors";

function FindContactInput({ value, onChange }) {
  return (
    <div className="find-input_frame ">
      <label>
        <input
          placeholder="Find contact..."
          className="input"
          type="text"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   const { items, filter } = state.contacts;

//   const filteredContacts = items.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );
//   return {
//     contacts: filteredContacts,
//   };
// };
const mapStateToProps = (state) => ({
  value: contactSelectors.getFilter(state),
});
// const mapDispatchToProps = (dispatch = {
//   onChangeFilter: (e) => dispatch(contactActions.changeFilter(e.target.value)),
//   // contactActions.changeFilter,
// });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(contactActions.changeFilter(e.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FindContactInput);
