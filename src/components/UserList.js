import { Link } from "react-router-dom";
import { useUsers } from "./UserContext";
import Pagination from "./Pagination";

const UserList = () => {
  const { users, deleteUser  } = useUsers();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white shadow-md rounded">
            <img className="w-16 h-16 rounded-full mx-auto" src={user.avatar} alt={user.first_name} />
            <h3 className="text-lg font-semibold text-center">{user.first_name} {user.last_name}</h3>
            <p className="text-center text-gray-500">{user.email}</p>
            <div className="flex justify-center mt-2">
              <Link to={`/edit/${user.id}`} state={{ user }} className="text-blue-500 mr-2">Edit</Link>
              <button className="text-red-500" onClick ={() => deleteUser(user.id)} >Delete</button>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default UserList;
