
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import UserList from './components/UserList';
import EditUser from './components/EditUser';
import { UserProvider } from "./components/UserContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/users" element={<UserList />} />
          <Route path='/edit/:id' element={<EditUser/>}/>
        </Routes>
        </BrowserRouter>  
      </UserProvider> 
    </div>
  );
}

export default App;
