import OpheliaIcon from '../Icon';
import { AntDesign } from '@expo/vector-icons';
import withDefaultIconStyle, {
  WithDefaultIconStyleProps,
} from 'ophelia/mobile/hocs/withIconStyle';

export interface BackProps extends WithDefaultIconStyleProps {}

const Back: OpheliaIcon<BackProps> = ({ styles }) => {
  return <AntDesign name="back" size={styles.size} color={styles.color} />;
};

export default withDefaultIconStyle<BackProps>(Back);
