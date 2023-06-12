// import React from 'react'
import { ReactNode } from "react";

interface Props {
  label: string;
  color: string;
  children: ReactNode;
  item: string;
  onClickItem: (item) => void;
}
const Bouton = ({ color, children, onClickItem, item }: Props) => {
  return <div className={color} key={item} onClick={() =>{onClickItem(item)}}>{children}</div>;
};

export default Bouton;
