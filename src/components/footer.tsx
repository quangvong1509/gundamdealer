import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const {Footer } = Layout;


const App: React.FC = () => {
    return(
        <Footer style={{ textAlign: 'center' }}>
    Ant Design ©{new Date().getFullYear()} Created by Ant HAHHA
</Footer>
    )
}

export default App;