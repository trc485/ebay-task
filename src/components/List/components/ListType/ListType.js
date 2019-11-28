import React from 'react';
import PropTypes from 'prop-types';

const ListType = ({type = 'unordered', children}) => {
    if (!children) {
        return null;
    }

    if (type === "unordered") {
        return (
            <ul>
                {children}
            </ul>
        );
    }

    if (type === "ordered") {
        return (
            <ol>
                {children}
            </ol>
        );
    }

    return null;

};

ListType.propTypes = {
    type: PropTypes.oneOf(['ordered', 'unordered']),
    children: PropTypes.node,
};

export default ListType;
