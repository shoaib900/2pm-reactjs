import React, { createContext } from "react";
import CompB from "./CompB";
import { useForm } from "react-hook-form";
import Button from "./Button";

let BioData = createContext();

const CompA = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>

      
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <input
          {...register("lastName", { required: true, pattern: /^[A-Za-z]+$/i })}
        />
        <input
          type="number"
          {...register("age", { required: true, min: 18, max: 99 })}
        />
        <input type="submit" />
      </form>

      <BioData.Provider value={"Shoaib Raza"}>
        <CompB />
      </BioData.Provider>
      <Button style={{color:"red"}} title={"hello world"} />

    </div>
  );
};
export { BioData };
export default CompA;
