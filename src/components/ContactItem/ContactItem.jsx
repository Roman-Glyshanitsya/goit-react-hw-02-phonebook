import PropTypes from 'prop-types';
import { Item, Button, Span } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onClick}) => {
    return (
        <Item key={id}>
            <p  >{name} : <Span>{number}</Span></p>
            <Button type='button' onClick={onClick}>Delete</Button>
        </Item>)
};

export default ContactItem;

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};