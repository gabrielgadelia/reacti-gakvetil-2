import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-blue-500 border border-black"
          {...register("email", {
            required: true,
            validate: (value) => value.includes("@gmail.com"),
          })}
          type="text"
          placeholder="enter email"
        />

        <input
          class="bg-blue-500 border border-black"
          {...register("password", {
            required: true,
            minLength: 8,
            maxLength: 16,
          })}
          type="password"
          name="password"
          placeholder="enter password"
        />

        <button type="submit" placeholder="log in">
          log in
        </button>
      </form>
    </>
  );
}

export default App;
