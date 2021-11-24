import * as React from "react";
import { useForm } from "react-hook-form";

 function Register() {
  const { register, handleSubmit, formState: {errors}, } = useForm();
  const onSubmit = (data) => console.log(data); 
//   alert(JSON.stringify(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true })} placeholder="First name" />

        <input {...register("lastName", { minLength: 2 })} placeholder="Last name" />

            <select {...register("category")}>
                <option value="">Select...</option>
                <option value="A">Seller</option>
                <option value="B">Buyer</option>
            </select>
      
        <input {...register("checkbox")} type="checkbox" value="A" />
        <input {...register("checkbox")} type="checkbox" value="B" />
        <input {...register("checkbox")} type="checkbox" value="C" />
      
        <input {...register("radio")} type="radio" value="A" />
        <input {...register("radio")} type="radio" value="B" />
        <input {...register("radio")} type="radio" value="C" />

        <input type="submit" />
    </form>
    
  );
}

export default Register;