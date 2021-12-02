import styled from 'styled-components';
import PropTypes from 'prop-types';

const ActivityStatement = styled.div`
  color: ${({ theme, activity }) =>
    activity === 'loading'
      ? theme.colors.headingTextColor
      : theme.colors.errorColor};
`;

ActivityStatement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ActivityStatement;
