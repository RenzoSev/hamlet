import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';
import withIconStyle, { WithIconStyleProps } from 'ophelia/hocs/withIconStyle';

export interface HomeProps extends WithIconStyleProps, IconProps {}

const Home: React.FC<HomeProps> = (props) => {
  const { styles, color, size } = props;

  return (
    <FontAwesome
      name="gear"
      size={size || styles.default.size}
      color={color || styles.default.color}
    />
  );
};

export default withIconStyle<HomeProps>(Home);
