import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import "../App.css";

const schema = z.object({
  email: z
    .email("Invalid email")
    .refine((v) => v.endsWith("@gmail.com"), "Email must contain @gmail.com"),
  password: z
    .string()
    .min(8, "PASSWORD IS TOO SHORT")
    .max(16, "PASSWORD TOO LONG")
    .refine((v) => /[A-Z]/.test(v), "Must include uppercase letter")
    .refine((v) => /[!@#$%^&*]/.test(v), "Must contain a symbol")
    .refine((v) => /\d/.test(v), "Must contain a number"),
  firstname: z.string().min(5, "TOO SHORT").max(20, "TOO LONG"),
  lastname: z.string().min(5, "TOO SHORT").max(20, "TOO LONG"),
  phoneNumber: z
    .string()
    .length(13, "NOT VALID NUMBER")
    .refine((v) => /^\+9955/.test(v), "Must start with +995 and then 5"),
  grade: z.coerce
    .number()
    .min(5, "Can't be a lower grade")
    .max(12, "Can't be a higher grade"),
  nickname: z
    .string()
    .min(2, "TOO SHORT")
    .max(15, "TOO LONG")
    .refine((v) => /[A-Z]/.test(v), "Must include uppercase letter")
    .refine((v) => /[!@#$%^&*]/.test(v), "Must contain a symbol")
    .refine((v) => /\d/.test(v), "Must contain a number"),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

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
          {[
            {
              name: "email",
              label: "Email",
              type: "text",
              placeholder: "enter email",
            },
            {
              name: "password",
              label: "Password",
              type: "password",
              placeholder: "enter password",
            },
            {
              name: "firstname",
              label: "First Name",
              type: "text",
              placeholder: "enter your name",
            },
            {
              name: "lastname",
              label: "Last Name",
              type: "text",
              placeholder: "enter your lastname",
            },
            {
              name: "phoneNumber",
              label: "Phone Number",
              type: "text",
              placeholder: "+995 5XX XXX XXX",
            },
            {
              name: "grade",
              label: "Grade",
              type: "number",
              placeholder: "enter your grade",
            },
            {
              name: "nickname",
              label: "Nickname",
              type: "text",
              placeholder: "enter your nickname",
            },
          ].map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-col gap-1">
              <label className="text-sm font-medium text-yellow-600">
                {label}
              </label>
              <input
                {...register(name)}
                type={type}
                placeholder={placeholder}
                className="border-2 border-yellow-300 rounded-lg px-4 py-2 text-gray-800 placeholder-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors[name] && (
                <p className="text-sm text-white bg-yellow-400 rounded-md px-3 py-1">
                  {errors[name].message}
                </p>
              )}
            </div>
          ))}

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
  );
}

export default Register;
