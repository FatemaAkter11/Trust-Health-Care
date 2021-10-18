import './App.css';
import {
  BrowserRouter as Router, Switch, Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';


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
              {/* <Courses></Courses> */}
            </Route>

            {/* <PrivateRoute path="/cart">
              <Cart></Cart>
            </PrivateRoute> */}

            <Route path="/login">
              {/* <Login></Login> */}
            </Route>

            <Route path="/signup">
              {/* <Signup></Signup> */}
            </Route>

            <Route path="/courses/:key">
              {/* <Details></Details> */}
            </Route>

            <Route path="*">
              {/* <PageNotFound></PageNotFound> */}
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
