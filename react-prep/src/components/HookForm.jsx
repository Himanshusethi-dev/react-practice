import React from "react";
import { useForm } from 'react-hook-form';

const HookForm = () => {

  const { register,handleSubmit } =   useForm()

  const onSubmit = (data)=>{
        console.log("formData",data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input {
            ...register("name")
            
            } type="text" name="name" id="name" />
        </div>
        <div className="form-row">
          <label htmlFor="age">Age</label>
          <input
          {
             ...register("age")
          }
          type="number" name="age" id="age" />
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
           {
             ...register("email")
          }
          type="email" name="email" id="email" />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input 
           {
             ...register("password")
          }
          type="password" name="password" id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default HookForm;
