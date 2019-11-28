import React from 'react';
import Parser from 'html-react-parser';
import { v4 } from 'node-uuid';
import { ListType, ListItem } from './components';

function getSublistsHashTable(sublists = []) {
    return sublists.reduce((acc, curr) => {
        acc[`${curr.position}`] = {...curr};
        return acc;
    }, {});
};

const List = ({type, items = [], sublists = []}) => {

    if (items.length === 0) {
        return null;
    }

    const sublistHashTable = getSublistsHashTable(sublists);

    return (
        <ListType
            type={type}
        >
            {
                items.map((item, index) => {
                    if (`${index}` in sublistHashTable) {
                        const sublist = sublistHashTable[`${index}`];
                        return (
                            <ListItem
                                key={`list-item-${v4()}`}
                            >
                                {Parser(item)}
                                <ListType
                                    type={sublist.style}
                                >
                                    {
                                        sublist.items.map(item => {
                                            return (
                                                <ListItem
                                                    key={`sublist-item-${v4()}`}
                                                    htmlString={item}
                                                >
                                                    {Parser(item)}
                                                </ListItem>
                                            );
                                        })
                                    }
                                </ListType>
                            </ListItem>
                        );
                    } else {
                        return (
                            <ListItem
                                key={`list-item-${v4()}`}
                                htmlString={item}
                            >
                                {Parser(item)}
                            </ListItem>
                        );
                    }
                })
            }
        </ListType>
    );

};

export default List;
