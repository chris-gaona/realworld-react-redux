import Header from './Header';
import React from 'react';
import {connect} from 'react-redux';

// use mapStateToProps() to access our specific state we want and pass it to props
const mapStateToProps = state => ({
    appName: state.common.appName
});

class App extends React.Component {
    render() {
        return (
            <div>
                <Header appName={this.props.appName}/>
                {/*The component to be rendered is represented by the props.children property, and the App.contextTypes snippet tells react-router to attach the children property to this component's props*/}
                {this.props.children}
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// use the connect() function to bind our state to the App component
export default connect(mapStateToProps, () => ({}))(App);