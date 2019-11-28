import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    color: white;
    &:hover {
        background-color: ${props => props.type === 'primary' ? '#286090' : '#c9302c'}
    }
    background-color: ${props => props.type === 'primary' ? '#337ab7' : '#d9534f'}
    border-color: ${props => props.type === 'primary' ? '#2e6da4' : '#ac2925'}
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    border: 1px solid transparent;
    padding: .6rem 1.2rem;
    line-height: 1.42857143;
    border-radius: .4rem;
`;

Button.defaultProps = {
    type: 'primary',
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'danger']),
};

export default Button;
