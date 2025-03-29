import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useUsers } from "./UserContext";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {};
  const { handleUserUpdate } = useUsers();

  const [updatedUser, setUpdatedUser] = useState({
    first_name: user?.first_name || "",
    last_name: user?.last_name || "",
    email: user?.email || "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedUser);
      console.log("Updated user:", response.data);

      // Update user list locally
      handleUserUpdate({ id: parseInt(id), ...updatedUser });

      navigate("/users");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  

  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form onSubmit={handleUpdate}>
          <input
            className="w-full p-2 mb-2 border rounded"
            type="text"
            value={updatedUser.first_name}
            onChange={(e) => setUpdatedUser({ ...updatedUser, first_name: e.target.value })}
            placeholder="First Name"
            required
          />
          <input
            className="w-full p-2 mb-2 border rounded"
            type="text"
            value={updatedUser.last_name}
            onChange={(e) => setUpdatedUser({ ...updatedUser, last_name: e.target.value })}
            placeholder="Last Name"
            required
          />
          <input
            className="w-full p-2 mb-2 border rounded"
            type="email"
            value={updatedUser.email}
            onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
            placeholder="Email"
            required
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded">Update</button>
        </form>
      </div>
    );
};

export default EditUser;
