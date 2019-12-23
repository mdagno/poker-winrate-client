import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import ApiContext from '../ApiContext';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component
  return (
    <Route
      {...props}
      render={componentProps => (
        <ApiContext.Consumer>
          {apiContext =>
            !!apiContext.user.id
              ? <Redirect to={'/'} />
              : <Component {...componentProps} />
          }
        </ApiContext.Consumer>
      )}
    />
  )
}
