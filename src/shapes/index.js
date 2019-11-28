import PropTypes from 'prop-types';

export const sublistPropType = PropTypes.shape({
    style: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.node),
    position: PropTypes.number
});

export const dataPropType = PropTypes.shape({
    text: PropTypes.string,
    level: PropTypes.number,
    style: PropTypes.PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string),
    sublists: PropTypes.arrayOf(sublistPropType)
});

export const blockPropType = PropTypes.shape({
    type: PropTypes.string,
    data: dataPropType,
});
