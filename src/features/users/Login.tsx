import { useFormik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import { useLoginMutation, type LoginRequest } from "./api";
import "./UserForm.css";

// ---------- Валидатор формы ----------
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [login, { isLoading, isSuccess, error }] = useLoginMutation();

  const formik = useFormik<LoginRequest>({
    initialValues: {
      username: "",
      password: "",
      expiresInMins: 60,
    },
    validationSchema,
    onSubmit: async (
      values: LoginRequest,
      { resetForm }: FormikHelpers<LoginRequest>,
    ) => {
      try {
        await login(values).unwrap();
        resetForm();
      } catch (err) {
        console.error("Login failed:", err);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="user-form-container">
      <h2>Login</h2>

      {/* Username */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username && (
          <div className="error">{formik.errors.username}</div>
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

      {/* Submit button */}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>

      {isSuccess && <div className="success">Login successful!</div>}
      {error && <div className="error">Failed to login.</div>}
    </form>
  );
}
