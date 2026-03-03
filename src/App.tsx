
import AddUser from "./features/users/AddUser"; // путь к твоему компоненту AddUser
import DeleteUser from "./features/users/DeleteUser";
import Login from "./features/users/Login";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1 style={{textAlign: "center"}}>User Management</h1>

      {/* Добавление нового пользователя */}
      <AddUser />
      <Login />
      <DeleteUser />
    </div>
  );
}
