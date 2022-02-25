import OpheliaIcon from '../Icon';
import { MaterialIcons } from '@expo/vector-icons';
import withDefaultIconStyle, {
  WithDefaultIconStyleProps,
} from '../../hocs/withDefaultIconStyle';

export interface GamepadProps extends WithDefaultIconStyleProps {}

const Gamepad: OpheliaIcon<GamepadProps> = ({ styles }) => {
  return (
    <MaterialIcons name="gamepad" size={styles.size} color={styles.color} />
  );
};

export default withDefaultIconStyle<GamepadProps>(Gamepad);
