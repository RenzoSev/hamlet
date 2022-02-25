import OpheliaIcon from '../Icon';
import { FontAwesome } from '@expo/vector-icons';
import withDefaultIconStyle, {
  WithDefaultIconStyleProps,
} from '../../hocs/withDefaultIconStyle';

export interface ConfigProps extends WithDefaultIconStyleProps {}

const Config: OpheliaIcon<ConfigProps> = ({ styles }) => {
  return <FontAwesome name="gear" size={styles.size} color={styles.color} />;
};

export default withDefaultIconStyle<ConfigProps>(Config);
