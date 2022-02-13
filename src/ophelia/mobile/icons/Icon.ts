import React from 'react';

export default interface OpheliaIcon<T extends IconProps> extends React.FC<T> {}

export interface IconProps {
  styles: {
    size: number;
    color: string;
  };
}
