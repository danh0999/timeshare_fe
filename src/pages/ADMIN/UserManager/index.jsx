import React, { useState, useEffect } from "react";
import "./styles.css";
import LayoutAdmin from "../../../Components/Layouts/LayoutAdmin";
import { Button, Col, Dropdown, Input, Row, Spin, Table } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import UserService from "../../../services/UserService";
const { Search } = Input;
const UserManager = () => {
  const [loading, setLoading] = useState(false);
  const [listUser, setListUser] = useState([]);
  console.log("listUser: ", listUser);
  const handleGetList = async () => {
    try {
      setLoading(true);
      const res = await UserService.getAllUser();
      if (!res.isSucceed) return;
      setListUser(res.result);
    } catch (err) {
      console.log("err: ", err);
    } finally {
      setLoading(false);
    }
  };
  const onSearch = (textSearch) => {};
  const handleMenuClick = (textSearch) => {};
  useEffect(() => {
    handleGetList();
  }, []);
  const items = [
    {
      label: "Update User",
      key: "1",
      icon: <EditOutlined />,
    },
    {
      label: "Delete User",
      key: "2",
      icon: <DeleteOutlined />,
      danger: true,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  const columns = [
    {
      title: "order",
      dataIndex: "order",
      key: "order",
      render: (_, record, index) => index + 1,
    },
    {
      title: "UserName",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "FullName",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Dropdown menu={menuProps} trigger={["click", "contextMenu"]}>
          <div style={{ cursor: "pointer" }}>...</div>
        </Dropdown>
      ),
    },
  ];

  return (
    <LayoutAdmin>
      <Spin spinning={loading}>
        <div className="wrap-page">
          <Row gutter={[24, 16]}>
            <Col span={24}>
              <div className="title">User Management</div>
            </Col>
            <Col flex={"auto"} style={{ width: 0 }}>
              <Search
                placeholder="search by..."
                allowClear
                onSearch={onSearch}
                style={{ width: "100%" }}
              />
            </Col>
            <Col style={{ width: 100 }}>
              <Button
                type="primary"
                icon={<PlusCircleOutlined />}
                size={"middle"}
              >
                Add User
              </Button>
            </Col>
            <Col span={24}>
              <Table columns={columns} dataSource={listUser} />
            </Col>
          </Row>
        </div>
      </Spin>
    </LayoutAdmin>
  );
};

export default UserManager;
