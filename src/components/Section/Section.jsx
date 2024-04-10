import PropTypes from "prop-types";
import SectionStyles from "./SectionStyles";
export const Section = ({ title, children }) => {
  return (
    <>
      <SectionStyles>
        <h2>{title}</h2>
        {children}
      </SectionStyles>
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
