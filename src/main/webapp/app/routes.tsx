import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navbar from 'app/shared/layout/header/navbar';
import Login from 'app/modules/login/login';
import Register from 'app/modules/account/register/register';
import Activate from 'app/modules/account/activate/activate';
import PasswordResetInit from 'app/modules/account/password-reset/init/password-reset-init';
import PasswordResetFinish from 'app/modules/account/password-reset/finish/password-reset-finish';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import National, { World } from 'app/modules/National.tsx/national';
import UserProfile from 'app/modules/userProfile/userprofile';
import EntitiesRoutes from 'app/entities/routes';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';
import PageNotFound from 'app/shared/error/page-not-found';
import { AUTHORITIES } from 'app/config/constants';
import Test from './test';
import StandardArticleBox from 'app/modules/articlecomponents/standardarticlebox';
import Search from './modules/search/search';
import Business from './modules/search/categories/business';
import Technology from './modules/search/categories/technology';
import Science from './modules/search/categories/science';
import Culture from './modules/search/categories/culture';
import Politics from './modules/search/categories/politics';

const loading = <div>loading ...</div>;

const Account = Loadable({
  loader: () => import(/* webpackChunkName: "account" */ 'app/modules/account'),
  loading: () => loading,
});

const Admin = Loadable({
  loader: () => import(/* webpackChunkName: "administration" */ 'app/modules/administration'),
  loading: () => loading,
});

const AppRoutes = () => {
  return (
    <div className="view-routes">
      <Navbar />
      <div className="view-routes">
        <ErrorBoundaryRoutes>
          <Route index element={<Home />} />
          <Route path="Navbar" element={<Navbar />} />
          <Route path="sab" element={<StandardArticleBox />} />
          <Route path="login" element={<Login />} />
          <Route path="national" element={<National />} />
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="world" element={<World />} />
          <Route path="business" element={<Business />} />
          <Route path="technology" element={<Technology />} />
          <Route path="science" element={<Science />} />
          <Route path="culture" element={<Culture />} />
          <Route path="politics" element={<Politics />} />
          <Route path="logout" element={<Logout />} />
          <Route path="search" element={<Search />} />
          <Route path="test" element={<Test />}></Route>
          <Route path="account">
            <Route
              path="*"
              element={
                <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]}>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route path="register" element={<Register />} />
            <Route path="activate" element={<Activate />} />
            <Route path="reset">
              <Route path="request" element={<PasswordResetInit />} />
              <Route path="finish" element={<PasswordResetFinish />} />
            </Route>
          </Route>
          <Route
            path="admin/*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.ADMIN]}>
                <Admin />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute hasAnyAuthorities={[AUTHORITIES.USER]}>
                <EntitiesRoutes />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </ErrorBoundaryRoutes>
      </div>
    </div>
  );
};

export default AppRoutes;
