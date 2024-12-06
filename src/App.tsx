import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
    <div id='root'>
    <Header />
      <Outlet />
      <Footer />
    </div>
     
    </>
  );
};

export default App;