import OpheliaIcon from '../Icon';
import { MaterialIcons } from '@expo/vector-icons';
import withDefaultIconStyle, {
  WithDefaultIconStyleProps,
} from '../../hocs/withDefaultIconStyle';

export interface GroupProps extends WithDefaultIconStyleProps {}

const Group: OpheliaIcon<GroupProps> = ({ styles }) => {
  return <MaterialIcons name="group" size={styles.size} color={styles.color} />;
};

export default withDefaultIconStyle<GroupProps>(Group);
