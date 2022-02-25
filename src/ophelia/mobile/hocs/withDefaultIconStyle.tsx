import React from 'react';

export interface WithDefaultIconStyleProps {
  styles: {
    size: 22;
    color: 'white';
  };
}

const defaultStyle = {
  size: 22,
  color: 'white',
};

export default function withDefaultIconStyle<
  T extends WithDefaultIconStyleProps
>(Icon: React.FC<T>) {
  const WithIconStyleComponent: React.FC<T> = (props: T) => {
    const { size, color } = defaultStyle;

    const styleProps = { styles: { size, color } };
    const extendedProps = { ...styleProps, ...props };

    return <Icon {...extendedProps} />;
  };

  return WithIconStyleComponent;
}
