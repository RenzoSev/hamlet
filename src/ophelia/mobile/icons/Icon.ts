import React from 'react';

export interface IconStyle {
  size: number;
  color: string;
}
export interface IconProps {
  styles: IconStyle;
}

export default interface OpheliaIcon<T extends IconProps> extends React.FC<T> {}
