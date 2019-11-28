import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'node-uuid';
import Header from '../Header';
import List from '../List';
import { blockPropType } from '../../shapes';

const BlocksParser = ({blocks = []}) => {
    return blocks.length === 0
        ? null
        : (
            blocks.map((block = {}) => {
                if (Object.keys(block).length === 0) {
                    return null;
                }

                if (block.type === 'header') {
                    const props = {
                        ...block.data,
                    };
                    return (
                        <Header
                            {...props}
                            key={`block-${v4()}`}
                        />
                    );
                }

                if (block.type === 'list') {
                    const props = {
                        ...block.data,
                        type: block.data.style,
                    };

                    return (
                        <List
                            {...props}
                            key={`block-${v4()}`}
                        />
                    );
                }

                return null;
            })
        );
};

BlocksParser.propTypes = {
    blocks: PropTypes.arrayOf(blockPropType)
};

export default BlocksParser;
