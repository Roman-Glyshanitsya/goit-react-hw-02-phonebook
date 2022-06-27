import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <List>
            {contacts.map(({ id, name, number }) =>
                <ContactItem
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    onClick={()=>onDeleteContact(id)}
                />
            )}
        </List>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired
};