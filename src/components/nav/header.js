import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  UserOutlined,
  UserAddOutlined,
  SettingOutlined,
  } from "@ant-design/icons";
  import {Link} from "react-router-dom";


const { SubMenu,Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
        </Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username" className="float-right">
        
          <Item key="setting:1">Dashboard</Item>
          <Item key="setting:2" >Logout</Item>
        
      </SubMenu>
      <Item key="login" icon={<UserOutlined  />} className="float-right">
      <Link to="/login">Lgin</Link>
        </Item>
      <Item key="register" icon={<UserAddOutlined />}>
      <Link to="/register">Register</Link>
        </Item>
      
    </Menu>
  );
};

export default Header;
