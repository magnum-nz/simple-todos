import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './Navbar.module.css';

const items: MenuProps['items'] = [
  {
    label: 'All todos',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Todo',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Done',
    key: 'SubMenu',
    icon: <SettingOutlined />,
  },
];

export const Navbar: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className={styles.navbarContainer}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
  );
};

