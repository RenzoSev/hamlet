import React from 'react';

export interface WithIconStyleProps {
  styles: {
    default: typeof defaultStyle;
  };
}

const defaultStyle = {
  size: 22,
  color: 'white',
};

export default function withIconStyle<T extends WithIconStyleProps>(
  Icon: React.FC<T>
) {
  const WithIconStyleComponent: React.FC<T> = (props: T) => {
    const styleProps = { styles: { default: defaultStyle } };
    const extendedProps = { ...props, ...styleProps };
    return <Icon {...extendedProps} />;
  };

  return WithIconStyleComponent;
}
