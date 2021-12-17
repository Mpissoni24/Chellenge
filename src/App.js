import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExampleContainer from '~/containers/ExampleContainer';
import history from '~/history';
import png from '../img/pexels-cottonbro-4973821.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { location } = this.props;
    return (
      <div className="brandHolder">
        <img className="img" src={png} alt="ajedrez" />
        <Router history={history}>
          <Switch>
            <Route exact path="/" location={location} component={ExampleContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
