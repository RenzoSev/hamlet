import getStyles from './styles';
import OpheliaComponent from '../Component';
import OpheliaIcon from 'ophelia/mobile/icons/Icon';
import { Linking } from 'react-native';
import { TouchableIcon } from '..';
import useTheme from 'ophelia/hooks/useTheme';

export interface ButtonContactProps {
  Icon: OpheliaIcon<any>;
  url: string;
}

const ButtonContact: OpheliaComponent<ButtonContactProps> = ({ Icon, url }) => {
  function handleContact(url: string) {
    Linking.openURL(url).catch((err) => {
      console.error(`Failed to opening page because: ${err}`);
      alert('Failed to open page');
    });
  }

  const { theme } = useTheme();
  const { container } = getStyles();

  return (
    <TouchableIcon
      Icon={Icon}
      onPressIcon={() => handleContact(url)}
      style={{ container, size: 36, color: theme.colors.background.tertiary }}
    />
  );
};

export default ButtonContact;
