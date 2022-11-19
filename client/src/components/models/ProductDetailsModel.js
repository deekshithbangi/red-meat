// import React,{useState} from 'react';
// import {ShoppingCardOutlined} from '@ant-design/icons'
// import {Button,Row,Col,Image,InputNumber,Modal,Space,Typography,message} from 'antd';

// const {Title,Text}=Typography;
// function ProductDetailsModel(props) {
//     const{product,visible,onCancel}= props;
//     const[quantity, setQuantity]=useState(1);
// const handleChangeQuantity=(value)=>{
//     setQuantity(value);
// }
//   return (
//    <Modal title={product?.name} width={700} visible={visible} onCancel={onCancel}footer={null}>
//     <Row gutter={12}>
//         <Col xs={24} sm={12} md={12} lg={12}>
//             <Image src={product?.image}/>
//         </Col>
//         <Col xs={24} sm={12} md={12} lg={12}>
//             <Space direction='vertical'>
//                 <Title level={5}>{product?.name}</Title>
//                 <Text type='secondary'>{product?._category?.name}</Text>
//                 <Text type='success'>${product?.prive}</Text>
//                 <Text italic>{product?.description}</Text>
//                 <Space direction='horizontal'>
//                     <InputNumber min={1} value={quantity} onChange={handleChangeQuantity} />
//                     <Button type='primary' icon={<ShoppingCardOutlined style={{fontSize:18}}/>}>Add To Cart</Button>
//                 </Space>
//             </Space>
//         </Col>

//     </Row>

//    </Modal>
//   )
// }

// export default ProductDetailsModel
