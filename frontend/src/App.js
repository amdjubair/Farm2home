import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import{BrowserRouter as Router,
           Routes,
           Route,
           Navigate,
} from "react-router-dom"
function App(){
  //const { user } = useContext(AuthContext);
  return (
     <Router>
       <Routes>
       <Route path='/' element={ <Home />} exact>
         </Route>
         <Route path='/login' element={<Login />} >
         </Route>
         <Route path='/register' element= {<Register />} >
         </Route>
         <Route path='/profile/:username' element={<Profile/>} >
         </Route>
       </Routes>
     </Router>
    
  );
}
export default App; 
