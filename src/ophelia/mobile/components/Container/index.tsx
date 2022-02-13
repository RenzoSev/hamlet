import getStyles from './styles';
import OpheliaComponent from '../Component';
import useTheme from '../../../hooks/useTheme';
import { SafeAreaView } from 'react-native';

export interface ContainerProps {}

const Container: OpheliaComponent<ContainerProps> = ({ children }) => {
  const { theme } = useTheme();
  const styles = getStyles(theme);

  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Container;
