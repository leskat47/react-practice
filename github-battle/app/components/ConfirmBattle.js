var React = require('react')

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> Confirm battle! </p>
}

module.exports = ConfirmBattle;
