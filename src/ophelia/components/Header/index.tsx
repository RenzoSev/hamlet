import React from 'react';
import ComponentProps from '../Component';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { BackHandler, SafeAreaView, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface HeaderProps extends ComponentProps {}

const Header: React.FC<HeaderProps> = ({
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
