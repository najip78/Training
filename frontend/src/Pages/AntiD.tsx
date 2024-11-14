import { useState } from 'react';
import { Typography, Button, DatePicker, Modal, Input, Divider, Space, Tooltip,ColorPicker } from 'antd';
import { SmileOutlined, EditOutlined, CalendarOutlined, BgColorsOutlined } from '@ant-design/icons';


const { Title, Paragraph } = Typography;

export default function AntiD() {
    const [text, setText] = useState("Code with me");
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const handleOk = () => setIsModalVisible(false);
    const handleCancel = () => setIsModalVisible(false);

    return (
        <div className="container flex flex-col items-center p-6 rounded ">
            {/* Date Picker */}
            <Space direction="vertical" className="mb-4">
                <DatePicker 
                    placeholder="Select Date" 
                    suffixIcon={<CalendarOutlined />} 
                    style={{ width: "100%" }} 
                />
            </Space>
            
            {/* Title */}
            <Title level={3}>Ant Design Demo</Title>
            
            {/* Editable Paragraph with Tooltip */}
            <Paragraph 
                style={{ color: "gray" }} 
                editable={{ onChange: (value) => setText(value) }}
            >
                {text}
            </Paragraph>

            {/* Button Group */}
            <Space className="mb-4">
                <Button type="primary" icon={<SmileOutlined />} onClick={() => setText("Hello Ant Design")}>
                    Change Text
                </Button>
                <Button icon={<EditOutlined />} onClick={showModal}>Edit Text</Button>
                
            </Space>

            <Divider />

            {/* Modal */}
            <Modal title="Edit Text" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input 
                    placeholder="Enter new text" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                />
            </Modal>
        </div>
    );
}
