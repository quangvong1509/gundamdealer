import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Homepage from '../content/homepage';

const { Header, Content, Footer } = Layout;

const items = new Array(16).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const App: React.FC = () => {
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Homepage />
     
    </Layout>
  );
};

export default App;