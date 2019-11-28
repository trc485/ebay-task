import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import { Heading1, Heading2 } from './styled';

const Header = ({text, level = 1}) => {
    return level === 1
        ? (
            <Heading1>
                {Parser(text)}
            </Heading1>
        ) :
        (
            <Heading2>
                {Parser(text)}
            </Heading2>
        );
};

Header.propTypes = {
    level: PropTypes.oneOf([1, 2]),
    text: PropTypes.string
};

export default Header;
