import * as React from 'react';
import OpheliaComponent from '../Component';
import OpheliaIcon, { IconStyle } from 'ophelia/mobile/icons/Icon';
import { StyleProp, View, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface TouchableIconStyle extends IconStyle {
  container: StyleProp<ViewStyle>;
}
interface TouchableIconProps {
  onPressIcon: () => void;
  Icon: OpheliaIcon<any>;
  style?: TouchableIconStyle;
}

const TouchableIcon: OpheliaComponent<TouchableIconProps> = ({
  onPressIcon,
  Icon,
  style,
}) => {
  const iconStyles = { color: style?.color, size: style?.size };

  return (
    <TouchableOpacity onPress={onPressIcon} style={style?.container}>
      <View>
        <Icon styles={iconStyles} />
      </View>
    </TouchableOpacity>
  );
};

export default TouchableIcon;
