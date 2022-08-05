import React from 'react';
import { useForm } from 'react-hook-form';


export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {})} />
      <input type="password" placeholder="Password" {...register("Password", {})} />

      <input type="submit" />
    </form>

  );
}