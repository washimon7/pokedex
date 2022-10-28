import PropTypes from 'prop-types';
import MatIcon from '@expo/vector-icons/MaterialCommunityIcons';

export const DynamicIconFavorite = ({ touched }) => {
  return touched ? (
    <MatIcon name="heart" size={28} color="red" />
  ) : (
    <MatIcon name="heart-outline" size={28} color="red" />
  );
};

DynamicIconFavorite.propTypes = {
  touched: PropTypes.bool,
};
