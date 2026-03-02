import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAddUserMutation } from "./api";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required("First name is required")
    .min(2, "Too short"),

  lastName: Yup.string().required("Last name is required").min(2, "Too short"),

  email: Yup.string().required("Email is required").email("inavalid Email"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 8 characters"),
});

export default function AddUser() {
  const [addUser, { isLoading, isSuccess, error }] = useAddUserMutation();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const result = await addUser(values).unwrap();
        resetForm();
      } catch (error) {
        /* empty */
      }
    },
  });

  return (
    <div>
      <div>
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
