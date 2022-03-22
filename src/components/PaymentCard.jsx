import { Button, Checkbox, Col, DatePicker, Form, Input, Row } from 'antd';
import React, { Fragment } from 'react';
import 'antd/dist/antd.min.css';
import FormItem from 'antd/lib/form/FormItem';

const PaymentCard = () => {
  const checkForm = () => {};
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name='basic'
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'>
      <Form.Item
        label='Номер карты'
        name='cardnumber'
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item
        label='Дата окончания действия'
        name='dateend'
        rules={[
          {
            required: true,
          },
        ]}>
        <DatePicker />
      </Form.Item>

      <Form.Item
        label='CVV'
        name='cvv'
        labelCol={{ span: 8 }}
        wrapperCol={{
          span: 16,
        }}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}>
        <Input.Password style={{ width: '80px' }} />
      </Form.Item>
      <Form.Item label='Amount' name='amount'>
        <Input style={{ width: '80px' }} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}>
        <Button type='primary' htmlType='submit'>
          Оплатить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PaymentCard;
