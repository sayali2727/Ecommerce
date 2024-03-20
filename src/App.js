
import './App.css';
import Nav from './Nav';
import {Routes,Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';
import AddProduct from "./Components/AddProduct";
import ProductList from "./Components/ProductList";
import UpdateProduct from './Components/UpdateProduct';


function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
      <Route element ={<PrivateComponent/>}>
        <Route path='/' element={<ProductList/>}/>
      <Route path='/add' element={<AddProduct/>}/>
      <Route path='/update/:id' element={<UpdateProduct/>}/>  
      <Route path='/Logout' element={<h1>Logout page ok</h1>}/>
      <Route path='/Profile' element={<h1>Profile page ok</h1>}/>
      </Route>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path ='/login' element={<Login/>}/>
     </Routes>
    
    </div>
  );
}

export default App;
