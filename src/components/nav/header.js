import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  } from "@ant-design/icons";

const { SubMenu,Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>Home</Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        
          <Item key="setting:1">Dashboard</Item>
          <Item key="setting:2" >Logout</Item>
        
      </SubMenu>
      <Item key="login" icon={<UserOutlined  />} className="float-right">Login</Item>
      <Item key="register" icon={<UserAddOutlined />}>Register</Item>
      
    </Menu>
  );
};

export default Header;
