import React, { useState } from "react";
import { useDeleteUserMutation } from "./api";
import "./UserForm.css";

export default function DeleteUser() {
  const [userId, setUserId] = useState<number | "">("");
  const [deleteUser, { isLoading, isSuccess, error, data }] =
    useDeleteUserMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === "") return;

    try {
      await deleteUser(userId).unwrap();
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

      {isSuccess && data && (
        <div className="success">
          User {data.id} marked deleted on {data.deletedOn}
        </div>
      )}
      {error && <div className="error">Failed to delete user.</div>}
    </form>
  );
}
