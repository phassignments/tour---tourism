import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AddPlan from './pages/AddPlan/AddPlan';
import AuthProvider from './pages/context/AuthProvider';
import Book from './pages/Home/Book/Book';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import MyTour from './pages/MyTour/MyTour';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <div style={{ minHeight: '95vh' }}>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute path="/book/:bookingId">
                <Book></Book>
              </PrivateRoute>
              <PrivateRoute path="/my_tour">
                <MyTour></MyTour>
              </PrivateRoute>
              <PrivateRoute path="/add_plan">
                <AddPlan></AddPlan>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
            </Switch>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
