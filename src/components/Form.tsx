import { ReactElement } from 'react';
import { Button, Form, Input } from 'antd'
import type { FormInstance } from "antd/es/form/Form"

interface CustomFormProps {
  onFinish?: (e: any) => void,
  onFieldsChange?: (e: any) => void,
  required?: boolean,
  requiredMsg?: string,
  placeholder: string,
  name: string,
  label?: string,
  button_title?: string,
  icon?: ReactElement,
  loading: boolean,
  form: FormInstance,
  requireKey?: boolean,
}
const CustomForm = (props: CustomFormProps) => {
  const { onFinish, onFieldsChange, required = false, requiredMsg, placeholder, name, label, button_title, icon, loading, form, requireKey } = props;

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onFinish}
      onFieldsChange={onFieldsChange}
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
      {requireKey && <Form.Item
        rules={[
          {
            required,
            message: "Vui lòng nhập mã truy cập",
          },
        ]}
        name="access-key"
        label={"Mã truy cập"}
      >
        <Input.Password />
      </Form.Item>}
      {button_title && icon && <Button
        type='primary'
        htmlType='submit'
        icon={icon}
        loading={loading}
      >
        {button_title}
      </Button>}
    </Form>
  )
}

export default CustomForm