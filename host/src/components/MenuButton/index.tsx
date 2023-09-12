import { FloatButton, FloatButtonProps, FloatButtonGroupProps } from 'antd';
import React, { useState } from 'react';

export interface MenuButtonProps extends Omit<FloatButtonGroupProps, 'children'> {
  items: Array<FloatButtonProps>;
}

const MenuButton = (props: MenuButtonProps) => {
  const { 
    items, 
    open: _open = false, 
    onClick,
    ...restProps 
  } = props;
  const [open, setOpen] = useState(_open);

  const groupOnClick = (e) => {
    setOpen(!open);
    onClick?.(e);
  }

  return (
    <FloatButton.Group
      trigger="click"
      {...restProps}
      open={open}
      onClick={groupOnClick}
    >
      {items.map(item => (
        <FloatButton {...item} />
      ))}
    </FloatButton.Group>
  )
}

export default MenuButton;