import OpheliaIcon from '../Icon';
import { AntDesign } from '@expo/vector-icons';
import withDefaultIconStyle, {
  WithDefaultIconStyleProps,
} from '../../hocs/withDefaultIconStyle';

export interface LinkedinProps extends WithDefaultIconStyleProps {}

const Linkedin: OpheliaIcon<LinkedinProps> = ({ styles }) => {  
  return (
    <AntDesign name="linkedin-square" size={styles.size} color={styles.color} />
  );
};

export default withDefaultIconStyle<LinkedinProps>(Linkedin);
