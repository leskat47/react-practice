var React = require('react');
var PropTypes = React.PropTypes;

function Results(props) {
  return (
    <div>
      RESULTS: {puke(props)}
    </div>
  );
}

function puke(obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
};

module.exports = Results;
