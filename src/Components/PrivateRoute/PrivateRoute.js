import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { removeFromCart } from '../../redux/actions/cartActions';

const PrivateRoute = (props) => {
    const { children, user, ...rest } = props;

    return (
        
        <Route
            {...rest}
            render={({ location }) =>
            user&&user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

const mapStateToProps = state => {
    return {
        user: state.loginReducers.user,
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);