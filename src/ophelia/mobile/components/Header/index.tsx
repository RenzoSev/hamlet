import Component from '../Component';
import getStyles from './styles';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useHeaderHeight } from 'react-navigation-stack';
import { SafeAreaView, View, Text } from 'react-native';

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
  const styles = getStyles({ height: useHeaderHeight() });

  return (
    <SafeAreaView style={styles.container}>
      {children}

      <View style={styles.containerInformations}>
        <View>
          <Text>{title}</Text>
        </View>

        <TouchableOpacity onPress={onPressIcon}>
          <View>
            <Icon />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;
