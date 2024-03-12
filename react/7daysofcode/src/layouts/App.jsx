import PropTypes from "prop-types";

export const App = ({ children }) => <>{children}</>;

App.propTypes = {
  children: PropTypes.node,
};
