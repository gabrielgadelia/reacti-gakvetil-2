import { useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-yellow-400 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-yellow-500 mb-6 text-center">
          Register
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">Email</label>
            <input
              {...register("email", {
                required: { value: true, message: "this field is required" },
                validate: (value) =>
                  value.includes("@gmail.com") ||
                  "Email must contain @gmail.com",
              })}
              type="text"
              placeholder="enter email"
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.email && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">
              Password
            </label>
            <input
              {...register("password", {
                required: { value: true, message: "this field is required" },
                validate: {
                  containsUppercase: (value) =>
                    /[A-Z]/.test(value) || "must include uppercase letter",
                  containsSymbol: (value) =>
                    /[!@#$%^&*]/.test(value) || "must contain some symbol",
                  containsNumber: (value) =>
                    /\d/.test(value) || "must contain a number",
                },
                minLength: { value: 8, message: "PASSWORD IS TOO SHORT" },
                maxLength: { value: 16, message: "PASSWORD TOO LONG" },
              })}
              type="password"
              placeholder="enter password"
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.password && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">
              First Name
            </label>
            <input
              type="text"
              placeholder="enter your name"
              {...register("firstname", {
                required: { value: true, message: "this field is required" },
                minLength: { value: 5, message: "TOO SHORT" },
                maxLength: { value: 20, message: "TOO LONG" },
              })}
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.firstname && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.firstname.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">
              Last Name
            </label>
            <input
              type="text"
              placeholder="enter your lastname"
              {...register("lastname", {
                required: { value: true, message: "this field is required" },
                minLength: { value: 5, message: "TOO SHORT" },
                maxLength: { value: 20, message: "TOO LONG" },
              })}
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.lastname && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.lastname.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+995 5XX XXX XXX"
              {...register("phoneNumber", {
                required: { value: true, message: "THIS FIELD IS REQUIRED" },
                validate: {
                  startsWithFive: (value) =>
                    /^\+9955/.test(value) || "must start with +995 and then 5",
                  length: (value) => value.length === 13 || "NOT VALID NUMBER",
                },
              })}
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.phoneNumber && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">Grade</label>
            <input
              type="number"
              placeholder="enter your grade"
              {...register("grade", {
                required: { value: true, message: "THIS FIELD IS REQUIRED" },
                validate: {
                  min: (value) => value >= 5 || "can't be a lower grade",
                  max: (value) => value <= 12 || "can't be a higher grade",
                },
              })}
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.grade && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.grade.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-yellow-600">
              Nickname
            </label>
            <input
              type="text"
              placeholder="enter your nickname"
              {...register("nickname", {
                required: { value: true, message: "this field is required" },
                minLength: { value: 2, message: "TOO SHORT" },
                maxLength: { value: 15, message: "TOO LONG" },
                validate: {
                  containsUppercase: (value) =>
                    /[A-Z]/.test(value) || "must include uppercase letter",
                  containsSymbol: (value) =>
                    /[!@#$%^&*]/.test(value) || "must contain some symbol",
                  containsNumber: (value) =>
                    /\d/.test(value) || "must contain a number",
                },
              })}
              className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            {errors.nickname && (
              <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                {errors.nickname.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 rounded-lg transition-colors duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </form>
      </div>
    </div>

    // <>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    //     <input
    //       className="bg-blue-500 border border-black"
    //       {...register("email", {
    //         required: {
    //           value: true,
    //           message: "this field is required",
    //         },
    //         validate: (value) =>
    //           value.includes("@gmail.com") || "Email must contain @gmail.com",
    //       })}
    //       type="text"
    //       placeholder="enter email"
    //     />
    //     {errors.email && <p>{errors.email.message}</p>}

    //     <input
    //       class="bg-blue-500 border border-black"
    //       {...register("password", {
    //         required: {
    //           value: true,
    //           message: "this field is required",
    //         },
    //         validate: {
    //           containsUpppercase: (value) => {
    //             /[A-Z]/.test(value) || "must include uppercase letter";
    //           },
    //           constainsSymbol: (value) => {
    //             /[!@#$%^&*]/.test(value) || "must contain some symbol";
    //           },
    //           containsNumber: (value) => {
    //             /\d/.test(value) || "must contain a number";
    //           },
    //         },
    //         minLength: {
    //           value: 8,
    //           message: "PASSWORD IS TOO SHoRT",
    //         },
    //         maxLength: {
    //           value: 16,
    //           message: "PASSWORD TOO LONG",
    //         },
    //       })}
    //       type="password"
    //       name="password"
    //       placeholder="enter password"
    //     />
    //     {errors.password && <p>{errors.password.message}</p>}

    //     <input
    //       type="text"
    //       name="firstname"
    //       placeholder="enter your name"
    //       {...register("firstname", {
    //         required: {
    //           value: true,
    //           message: "this field is required",
    //         },
    //         minLength: {
    //           value: 5,
    //           message: "TOO SHORT",
    //         },
    //         maxLength: {
    //           value: 20,
    //           message: "TOO LOONG",
    //         },
    //       })}
    //     />
    //     {errors.firstname && <p>{errors.firstname.message}</p>}

    //     <input
    //       type="text"
    //       name="lastname"
    //       placeholder="enter your name"
    //       {...register("lastname", {
    //         required: {
    //           value: true,
    //           message: "this field is required",
    //         },
    //         minLength: {
    //           value: 5,
    //           message: "TOO SHORT",
    //         },
    //         maxLength: {
    //           value: 20,
    //           message: "TOO LOONG",
    //         },
    //       })}
    //     />
    //     {errors.lastname && <p>{errors.lastname.message}</p>}

    //     <input
    //       type="number"
    //       name="PHnumber"
    //       placeholder="enter your number"
    //       {...register("phoneNumber", {
    //         required: {
    //           value: true,
    //           message: "THIS FIELD IS REQUIRED",
    //         },
    //         validate: {
    //           startsWithFive: (value) => {
    //             /^\+995 ?5/.test(value) ||
    //               "THE NUMBER NEEDS TO START WITH +995 and next 5";
    //           },
    //           length: (value) => {
    //             return value === 11 || "THIS IS M+NOT VALID NUMBRE";
    //           },
    //         },
    //       })}
    //     />

    //     <input
    //       type="number"
    //       name="grade"
    //       placeholder="enter your grade"
    //       {...register("grade", {
    //         required: {
    //           value: true,
    //           message: "THIS FIELD IS REQUIRED",
    //         },
    //         minLength: {
    //           value: 5,
    //           message: "cant be a lower grade",
    //         },
    //         maxLength: {
    //           value: 12,
    //           message: "cant be a higher grade",
    //         },
    //       })}
    //     />

    //     <input
    //       type="text"
    //       name="nickName"
    //       placeholder="enter your nickname"
    //       {...register("nickname", {
    //         required: {
    //           value: true,
    //           message: "this field is required",
    //         },
    //         minLength: {
    //           value: 2,
    //           message: "TOO SHORT",
    //         },
    //         maxLength: {
    //           value: 15,
    //           message: "TOO LOONG",
    //         },
    //         validate: {
    //           containsUpppercase: (value) => {
    //             /[A-Z]/.test(value) || "must include uppercase letter";
    //           },
    //           constainsSymbol: (value) => {
    //             /[!@#$%^&*]/.test(value) || "must contain some symbol";
    //           },
    //           containsNumber: (value) => {
    //             /\d/.test(value) || "must contain a number";
    //           },
    //         },
    //       })}
    //     />

    //     <button type="submit" disabled={isSubmitting}>
    //       {isSubmitting ? "Logging in..." : "Log in"}
    //     </button>
    //   </form>
    // </>
  );
}

export default App;

// სახელი (string) OK
// გვარი (string) OK
// ელ.ფოსტა (email) OK
// ტელეფონი  (საქართველოს მობილურის ნომერი) OK
// კლასი (number) OK
// რეგიონი (ჩამონათვალი რეგიონების და უნდა იყოს არჩევადი)
// მომხმარებლის სახელი(ნიკნეიმი) (min length = 2)
// პაროლი (თქვენით მოიგონეთ რომ ძლიერი პაროლი იყოს) OK
