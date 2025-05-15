import React from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  BarChartOutlined,
  AppstoreOutlined,
  PlusOutlined,
} from '@ant-design/icons';

function Side_bar({ onSelect }) {

  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    navigate(`/${e.key}`);
  };

  return (
    <div style={{
      width: '30%',
      height: '80vh',
    }}>
      <Menu
        mode="vertical"
        defaultSelectedKeys={['revenue']}
        onClick={handleMenuClick}
        style={{ height: '100%', borderRight: 0, padding: '20px', marginTop: '10px' }}
        items={[
          {
            key: 'revenu_analysis',
            icon: <BarChartOutlined />,
            label: 'Revenue Analysis',
          },
          {
            key: 'inventry_management',
            icon: <AppstoreOutlined />,
            label: 'Inventory Management',
          },
          {
            key: 'product_register',
            icon: <PlusOutlined />,
            label: 'Product Registration',
          },
        ]}
      />
    </div>
  );
}

export default Side_bar;
