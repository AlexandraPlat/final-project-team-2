import React, { useEffect, useState } from "react";
import { useDeleteUserMutation } from "./api";
import "./UserForm.css";

export default function DeleteUser() {
  const [userId, setUserId] = useState<number | "">("");
  const [deleteUser, { isLoading, error, data }] = useDeleteUserMutation();

  const [showSuccsess, setShowSuccsess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSuccsess(false), 5000);
    return () => clearTimeout(timer);
  }, [showSuccsess]);

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userId === "") return;

    try {
      await deleteUser(userId).unwrap();
      setShowSuccsess(true);
      setUserId("");
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="user-form-container">
      <h2>Delete User</h2>

      <div>
        <label htmlFor="userId">User ID</label>
        <input
          id="userId"
          name="userId"
          type="number"
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value))}
        />
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete User"}
      </button>

      {showSuccsess && data && (
        <div className="success">
          User {data.id} marked deleted on {data.deletedOn}
        </div>
      )}
      {error && <div className="error">Failed to delete user.</div>}
    </form>
  );
}
