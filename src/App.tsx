import * as React from 'react';
import { ButtomNavigation } from './components/bottomNavigation/BottomNavigation';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Loading } from './components/loading/Loading';
const Projects = React.lazy(() => import('./pages/projects/Projects'));
const Profile = React.lazy(() => import('./pages/profile/Profile'));
const Connect = React.lazy(() => import('./pages/connect/Connect'));

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/projects">
                <React.Suspense fallback={Loading}>
                    <Projects />
                </React.Suspense>
            </Route>
            <Route path="/person">
                <React.Suspense fallback={Loading}>
                    <Profile />
                </React.Suspense>
            </Route>
            <Route path="/connect">
                <React.Suspense fallback={Loading}>
                    <Connect />
                </React.Suspense>
            </Route>
            <Route exact path="/">
                <Redirect to="/person" />
            </Route>
        </Switch>
        <footer>
            <ButtomNavigation />
        </footer>
    </BrowserRouter>
);
