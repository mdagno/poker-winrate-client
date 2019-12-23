import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ApiContext from '../ApiContext'

export default function PrivateRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <ApiContext.Consumer>
          {apiContext =>
            !!apiContext.user.id
              ? <Component {...componentProps} />
              : (
                <Redirect
                  to={{
                    pathname: apiContext.user.idle ? '/login' : '/register',
                    state: { from: componentProps.location },
                  }}
                />
              )
          }
        </ApiContext.Consumer>
      )}
    />
  )
}
