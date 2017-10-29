import React from 'react';
import {connect} from 'react-redux';

// use mapStateToProps() to access our specific state we want and pass it to props
const mapStateToProps = state => ({
    appName: state.appName
});

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.appName}
            </div>
        );
    }
}

// use the connect() function to bind our state to the App component
export default connect(mapStateToProps, () => ({}))(App);