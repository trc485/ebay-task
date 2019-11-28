import React, { useState } from 'react';
import { Layout, Button, BlocksParser } from './components';
import { aueligibleitem } from './data';

const App = () => {
    const [blocks = [], setBlocks] = useState([]);
    return (
        <Layout>
            <BlocksParser
                blocks={blocks}
            />
            {
                blocks.length === 0
                    ? (
                        <Button
                            type="primary"
                            onClick={() => setBlocks(aueligibleitem.blocks)}
                            style={{
                                display: 'block',
                                margin: '2.4rem auto'
                            }}
                        >
                            Render HTML
                        </Button>
                    )
                    : (
                        <Button
                            type="danger"
                            style={{
                                display: 'block',
                                margin: '2.4rem auto'
                            }}
                            onClick={() => setBlocks([])}
                        >
                            Hide HTML
                        </Button>
                    )
            }
        </Layout>
    );
};

export default App;
