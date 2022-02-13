import * as React from 'react';
import OpheliaComponent from '../Component';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TouchableIconProps {
  onPressIcon: () => void;
  Icon: React.ElementType;
}

const TounchableIcon: OpheliaComponent<TouchableIconProps> = ({
  onPressIcon,
  Icon,
}) => {
  return (
    <TouchableOpacity onPress={onPressIcon}>
      <View>
        <Icon />
      </View>
    </TouchableOpacity>
  );
};

export default TounchableIcon;
