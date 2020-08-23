import React, { Suspense } from 'react';
import 'assets/scss/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from 'components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FullPageLoader from 'components/FullPageLoader';
const Home = React.lazy(() =>
  Promise.all([
    import('./pages/Home'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports)
);
const Blog = React.lazy(() =>
  Promise.all([
    import('./pages/Blog'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports)
);
const ContactUs = React.lazy(() =>
  Promise.all([
    import('./pages/ContactUs'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports)
);
const Login = React.lazy(() =>
  Promise.all([
    import('./pages/ContactUs'),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports)
);

function App() {
  const loading = useSelector((state) => state?.loader?.loading);
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div className="main-content" style={{ marginTop: 100 }}>
          <Suspense fallback={<FullPageLoader loading={true} />}>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/blogs" component={Blog} />
              <Route exact path="/contact-us" component={ContactUs} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <Route path="*" render={() => 404} />
            </Switch>
          </Suspense>
          <FullPageLoader loading={loading} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
