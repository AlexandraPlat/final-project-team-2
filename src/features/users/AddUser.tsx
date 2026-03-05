import { useFormik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useAddUserMutation, type NewUser } from "./api";
import "./UserForm.css"; // общий CSS для всех форм
import { useEffect, useState } from "react";

// ---------- Валидатор формы ----------
const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Too short"),
  lastName: Yup.string().required("Last name is required").min(2, "Too short"),
  email: Yup.string().required("Email is required").email("Invalid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

// ---------- Компонент AddUser ----------
export default function AddUser() {
  // RTK Query хук для мутации добавления пользователя
  const [addUser, { isLoading, error }] = useAddUserMutation();
  const [showSuccsess, setShowSuccsess] = useState(false);

  useEffect(() => {
    if (showSuccsess) {
      const timer = setTimeout(() => setShowSuccsess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccsess]);

  // ---------- Formik ----------
  const formik = useFormik<NewUser>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (
      values: NewUser,
      { resetForm }: FormikHelpers<NewUser>,
    ) => {
      try {
        // Отправляем POST через RTK Query
        await addUser(values).unwrap();
        resetForm(); // очищаем форму
        setShowSuccsess(true);
      } catch (err) {
        console.error("Failed to add user:", err);
      }
    },
  });

  // ---------- JSX формы ----------
  return (
    <form onSubmit={formik.handleSubmit} className="user-form-container">
      <h2>Add New User</h2>

      {/* First Name */}
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="error">{formik.errors.firstName}</div>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div className="error">{formik.errors.lastName}</div>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="error">{formik.errors.email}</div>
        )}
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="min 6 characters"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="error">{formik.errors.password}</div>
        )}
      </div>

      {/* Кнопка сабмита */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add User"}
      </button>

      {/* Статус успеха */}
      {showSuccsess && <div className="success">User successfully added!</div>}

      {/* Статус ошибки */}
      {error && <div className="error">Failed to add user.</div>}
    </form>
  );
}
