import React, { useState } from 'react';
import FormRender from '../FormRender';
import downloadTemplate from '@/schema/downloadTemplate.json';
import { Button, Drawer, DrawerProps } from 'antd';

export interface TemplateDrawerProps extends DrawerProps {

}

let form;
const TemplateDrawer = (props: TemplateDrawerProps) => {

  const handleSubmit = () => {
    form
      .submit()
      .then(values => {
        console.log(values)
      })
      .catch(console.error)
  }

  return (
    <Drawer
      extra={[
        <Button type="primary" onClick={handleSubmit}>下载</Button>
      ]}
      destroyOnClose
      {...props}
    >
      <FormRender schema={downloadTemplate} getForm={baseForm => form = baseForm} />
    </Drawer>
  )
}

export default TemplateDrawer;