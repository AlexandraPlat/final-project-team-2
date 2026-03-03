
import AddUser from "./features/users/AddUser"; // путь к твоему компоненту AddUser

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>User Management</h1>

      {/* Добавление нового пользователя */}
      <AddUser />
    </div>
  );
}
