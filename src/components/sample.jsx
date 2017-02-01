import React from 'react';

function Sample (props) {
  return (
    <h2 className="sample">{props.content}</h2>
  );

}

Sample.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Sample;
