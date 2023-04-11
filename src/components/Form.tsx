import { ReactElement } from 'react';
import { Button, Form, Input } from 'antd'
import type { FormInstance } from "antd/es/form/Form"

interface CustomFormProps {
  onFinish?: (e: any) => void,
  required?: boolean,
  requiredMsg?: string,
  placeholder: string,
  name: string,
  label?: string,
  button_title: string,
  icon: ReactElement,
  loading: boolean,
  form: FormInstance
}
const CustomForm = (props: CustomFormProps) => {
  const { onFinish, required = false, requiredMsg, placeholder, name, label, button_title, icon, loading, form } = props;

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onFinish}
    >
      <Form.Item
        rules={[
          {
            required,
            message: requiredMsg,
          },
        ]}
        name={name}
        label={label}
      >
        <Input placeholder={placeholder} />
      </Form.Item>
      <Button
        type='primary'
        htmlType='submit'
        icon={icon}
        loading={loading}
      >
        {button_title}
      </Button>
    </Form>
  )
}

export default CustomForm