import React, { useState } from 'react';
import { Card, Avatar, Typography, Input, Row, Col, List } from 'antd';
import { UserOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Search } = Input;

// Sample employee data
const employeesData = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+123456789', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+987654321', department: 'Human Resources' },
    { id: 3, name: 'Sam Green', email: 'sam.green@example.com', phone: '+1122334455', department: 'Marketing' },
   
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+123456789', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+987654321', department: 'Human Resources' },
    { id: 3, name: 'Sam Green', email: 'sam.green@example.com', phone: '+1122334455', department: 'Marketing' },
   
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+123456789', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+987654321', department: 'Human Resources' },
    { id: 3, name: 'Sam Green', email: 'sam.green@example.com', phone: '+1122334455', department: 'Marketing' },
   
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+123456789', department: 'Engineering' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+987654321', department: 'Human Resources' },
    { id: 3, name: 'Sam Green', email: 'sam.green@example.com', phone: '+1122334455', department: 'Marketing' },
   
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+123456789', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+987654321', department: 'Human Resources' },
  { id: 3, name: 'Sam Green', email: 'sam.green@example.com', phone: '+1122334455', department: 'Marketing' },
  // Add more employees as needed
];

export default function EmployeeList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employeesData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Employee List</Title>
      
      {/* Search Bar */}
      <Search
        placeholder="Search employees"
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', marginBottom: '20px' }}
      />

      {/* Employee Cards */}
      <Row gutter={[16, 16]}>
        {filteredEmployees.map((employee) => (
          <Col xs={24} sm={12} md={8} lg={6} key={employee.id}>
            <Card bordered hoverable style={{ textAlign: 'center', borderRadius: '10px' }}>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                style={{ backgroundColor: '#87d068', marginBottom: '10px' }}
              />
              <Title level={4}>{employee.name}</Title>
              <Text><MailOutlined /> {employee.email}</Text><br />
              <Text><PhoneOutlined /> {employee.phone}</Text><br />
              <Text strong>{employee.department}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
