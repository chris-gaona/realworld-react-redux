import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';
import agent from '../agent';

// use mapStateToProps() to access our specific state we want and pass it to props
const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({type: 'APP_LOAD', payload, token}),
    onRedirect: () =>
        dispatch({type: 'REDIRECT'})
});

class App extends React.Component {
    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
            agent.setToken(token);
        }

        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
            this.context.router.replace(nextProps.redirectTo);
            this.props.onRedirect();
        }
    }

    render() {
        if (this.props.appLoaded) {
            return (
              <div>
                  <Header
                    appName={this.props.appName}
                    currentUser={this.props.currentUser} />
                {this.props.children}
              </div>
            )
        }

        return (
            <div>
                <Header
                    currentUser={this.props.currentUser}
                    appName={this.props.appName}/>
                
            </div>
        );
    }
}


// the App.contextTypes snippet tells react-router to attach the children property to this component's props
App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// use the connect() function to bind our state to the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);