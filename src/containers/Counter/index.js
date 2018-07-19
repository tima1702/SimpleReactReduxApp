import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addCounter, decCounter} from '../../core/store/actions/counterAction';
import Button from './components/Button';
import Result from './components/Result';

class Counter extends Component {
  render() {
    const {value, addCounter, decCounter} = this.props;
    return (
        <div className="App">
          <Result value={value} />
          <Button click={() => addCounter()} title={'+'} />
          <Button click={() => decCounter()} title={'-'} />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counterReducer.value
});

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch(addCounter()),
  decCounter: () => dispatch(decCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);