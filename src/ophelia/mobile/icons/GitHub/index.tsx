import OpheliaIcon from '../Icon';
import { FontAwesome5 } from '@expo/vector-icons';
import withDefaultIconStyle, {
  WithDefaultIconStyleProps,
} from '../../hocs/withDefaultIconStyle';

export interface GitHubProps extends WithDefaultIconStyleProps {}

const GitHub: OpheliaIcon<GitHubProps> = ({ styles }) => {
  return (
    <FontAwesome5
      name="github-square"
      size={styles.size}
      color={styles.color}
    />
  );
};

export default withDefaultIconStyle<GitHubProps>(GitHub);
