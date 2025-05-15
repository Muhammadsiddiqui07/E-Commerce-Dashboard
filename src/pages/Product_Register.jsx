import Header from "../components/header";
import Side_bar from "../components/Menu";
import { Card, Button, Form, Input, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



function Product_Registeration() {
    const onFinish = values => {
        console.log('Success:', values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    
    return (
        <div>
            <Header />

            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'flex-start'
            }}>
                <Side_bar onSelect={(key) => {
                    console.log("Selected:", key);
                }} />
                <div style={{
                    width: '80%'
                }}>
                    <h2>Add Product Form:</h2>
                    <div>
                        <Card
                            variant="borderless"
                            style={{ width: '70%' }}>

                            <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >

                                <Form.Item label="Product Picture" valuePropName="fileList" getValueFromEvent={normFile}>
                                    <Upload action="/upload.do" listType="picture-card">
                                        <button
                                            style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                                            type="button"
                                        >
                                            <PlusOutlined />
                                            <div style={{ marginTop: 8 }}>Upload</div>
                                        </button>
                                    </Upload>
                                </Form.Item>

                                <Form.Item
                                    label="Product Name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your Product Name!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Product Description"
                                    name="discription"
                                    rules={[{ required: true, message: 'Please input your Product Description!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Product Category"
                                    name="category"
                                    rules={[{ required: true, message: 'Please input your Product Category!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Product Price"
                                    name="price"
                                    rules={[{ required: true, message: 'Please input your Product Price!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Product Stock"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your Product Stock!' }]}
                                >
                                    <Input />
                                </Form.Item>


                                <Form.Item label={null}>
                                    <Button style={{ width: '30%' }} type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>

                        </Card>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Product_Registeration