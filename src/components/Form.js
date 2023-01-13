import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required!"),
    email: yup.string().email("Email is invalid").required("Email is required!"),
    age: yup.number().positive("Age must be positive!").integer("Age must be an integer!").required("Age is required!"),
    password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match!").required("Confirm Password is required!")
  });

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")}/>
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")}/>
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")}/>
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password..." {...register("password")}/>
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
