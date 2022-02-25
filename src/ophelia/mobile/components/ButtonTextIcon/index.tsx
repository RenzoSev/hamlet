import * as React from 'react';
import getStyles from './styles';
import OpheliaComponent from '../Component';
import OpheliaIcon from 'ophelia/mobile/icons/Icon';
import useTheme from 'ophelia/hooks/useTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, StyleProp, ViewStyle } from 'react-native';

interface ButtonTextIconStyle {
  container: StyleProp<ViewStyle>;
}

export interface ButtonTextIconProps {
  Icon: OpheliaIcon<any>;
  onPressIcon: () => void;
  text: string;
  style?: ButtonTextIconStyle;
}

const ButtonTextIcon: OpheliaComponent<ButtonTextIconProps> = ({
  text,
  Icon,
  onPressIcon,
  style,
}) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPressIcon}
      style={[styles.container, style?.container]}
    >
      <Icon />

      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonTextIcon;
