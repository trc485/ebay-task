import React, { useState } from 'react';
import { Layout, Button, BlocksParser } from './components';
import data from './data';

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
                            onClick={() => setBlocks(data.blocks)}
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
