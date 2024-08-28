import {
    Layout, Menu, Button, Row, Col,
    Select, DatePicker, Dropdown, Typography, ConfigProvider, Affix
} from 'antd';
import { Route, BrowserRouter as Router, Switch, Link, useHistory, useLocation } from "react-router-dom";
import { useState } from 'react';


export const SideMenuBar = () => {
    const [activeField, setActiveField] = useState(0)
    const { Header, Footer, Sider, Content } = Layout;

    const menuOptions = [
        {
            key: 1,
            title: "health-cheks",
            subMenu: [
                {
                    title: "health cheks",
                    path: "/health-checks"
                }
            ]
        },
        {
            key: 2,
            title: "pharmacy"
        }
    ]
    return (


        <Router>
            <Route exact path="/health-checks" component={HealthChecks} />
            <Layout style={{ minHeight: '100vh' }}>
                <Affix offsetTop={0} >
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#2C3344',
                                fontSize: 13
                            }
                        }}>
                        <Sider
                            collapsible
                            breakpoint='lg'
                            collapsedWidth={0}
                            // collapsed={collapsed}
                            zeroWidthTriggerStyle={{ display: 'none' }}
                            // onBreakpoint={(broken) => { setCollapsed(broken); }}
                            width={250}
                            style={{
                                background: '#0F172A',
                                left: 0,
                                height: '100vh',
                                overflowY: "auto",
                            }}>

                            <div style={{ padding: '20px 0', display: 'flex', justifyContent: 'center' }} className="logo" >
                                <span className="logo-icon">image thi yha</span>
                                <span className="logo-text" style={{ marginLeft: 5 }}>image thi yha</span>
                            </div>

                            <Menu
                                theme='dark'
                                mode="inline"
                                defaultSelectedKeys={[window.location.pathname]}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', padding: '0 10px' }}

                            >
                                {menuOptions.map((item, index) =>
                                    item.subMenu ?
                                        <Menu.SubMenu key={index} title={item.title} icon={item.icon} style={{ marginLeft: "-15px" }}>
                                            {item.subMenu.map((el, index) => {
                                                console.log({ el, index });
                                                return el.subMenu ?
                                                    <Menu.SubMenu key={index} title={el.title} icon={el.icon}>
                                                        {el.subMenu.map(el =>
                                                            <Menu.Item key={el.path}>
                                                                <Link to={el.path}>{el.title}</Link>
                                                            </Menu.Item>
                                                        )}
                                                    </Menu.SubMenu> :
                                                    <Menu.Item key={el.path}>
                                                        <Link to={el.path}>{el.title}</Link>
                                                    </Menu.Item>
                                            }
                                            )}
                                        </Menu.SubMenu>
                                        :
                                        <Menu.Item key={item.path} title={item.title} icon={item.icon} style={{ paddingLeft: "10px" }}>
                                            <Link to={item.path}>{item.title}</Link>
                                        </Menu.Item>
                                )}
                            </Menu>
                        </Sider>
                    </ConfigProvider>
                </Affix>
                {activeField}
            </Layout>
        </Router>
        
    )
}

const HealthChecks = () => {
    return (
        <h2>
            this is health checks
        </h2>
    )
}

const Pharmacy = () => {
    return (
        <h2>
            pharmacy works
        </h2>
    )
}

const RouterPaths = () => {
    return (
        <Router>
            <Route exact path="/health-checks" component={HealthChecks} />
        </Router>
    )
}
