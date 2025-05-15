import { useState } from "react";
import Header from "../components/header";
import Side_bar from "../components/Menu.jsx";
import { Button, Input, Table } from "antd";
import { products as initialProducts } from '../services/fake_data.jsx';

function Inventory_Management() {
    const [filteredProducts, setFilteredProducts] = useState(initialProducts);

    const handleSearch = (value) => {
        const lower = value.toLowerCase();
        const filtered = initialProducts.filter(item =>
            item.name.toLowerCase().includes(lower) ||
            item.category.toLowerCase().includes(lower)
        );
        setFilteredProducts(filtered);
    };

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (price) => `$${price}`,
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock',
            render: (stock) => (
                <span style={{ color: stock < 10 ? 'red' : 'green' }}>
                    {stock}
                    <Button danger style={{margin:'10px'}}>Delete</Button>
                    <Button>Update</Button>
                </span>

            )
        }
    ];

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

                <div style={{ width: '80%' }}>
                    <h2>Inventry Management: </h2>
                    <div style={{ marginTop: '20px' }}>
                        <Input.Search
                            placeholder="Search products"
                            allowClear
                            onChange={(e) => handleSearch(e.target.value)}
                            style={{ width: '90%', marginBottom: 20 }}
                        />
                    </div>

                    <div>
                        <Table
                            columns={columns}
                            dataSource={filteredProducts}
                            rowKey="id" // ensures each row has a unique identifier
                            pagination={{ pageSize: 5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inventory_Management;
