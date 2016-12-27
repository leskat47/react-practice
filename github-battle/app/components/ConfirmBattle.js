var React = require('react');

function puke(object) {
  return <pre>{JSON.stringify(object, null, '')}</pre>;
}

function ConfirmBattle(props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <p> Confirm battle! {puke(props)}</p>;
}

module.exports = ConfirmBattle;
