import React from 'react';

export default interface ComponentProps {
  title: string;
  Icon: React.FC<any>;
  onPressIcon?: () => void;
}
