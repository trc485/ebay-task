import React from 'react';
import { Content } from './styled';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
    <Content>
        {children}
    </Content>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;
