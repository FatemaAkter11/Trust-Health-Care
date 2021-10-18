import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PatientResources from './pages/PatientResources/PatientResources';
import TrustCareKids from './pages/TrustCareKids/TrustCareKids';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/services">
              <Services></Services>
            </Route>
            <Route path="/patient">
              <PatientResources></PatientResources>
            </Route>
            <Route path="/kids">
              <TrustCareKids></TrustCareKids>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/services/:id">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>




            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
