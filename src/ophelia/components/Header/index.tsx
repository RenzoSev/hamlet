import React from 'react';
import Component from '../Component';
import { SafeAreaView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface HeaderProps {
  title: string;
  Icon: React.ElementType;
  onPressIcon: () => void;
}

const Header: Component<HeaderProps> = ({
  title,
  children,
  Icon,
  onPressIcon,
}) => {
  return (
    <SafeAreaView>
      {children}

      <View>
        <Text>{title}</Text>
      </View>

      <TouchableOpacity onPress={onPressIcon}>
        <View>
          <Icon />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;
