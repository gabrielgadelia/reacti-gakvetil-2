import { useState } from "react";

import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleReset(e) {
    e.preventDefault();

    let newErrors = {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (name.length < 4) {
      setErrors({ ...errors, name: "nameis too short" });
    }

    if (lastName.length < 5) {
      setErrors({ ...errors, lastName: "Last name is too short" });
    }

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "email has to contain @ symbol" });
    }

    setErrors(newErrors);

    console.log(name, lastName, email, password);
  }

  return (
    <>
      <form action="" onSubmit={handleReset}>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="text"
          name="last name"
          placeholder="enter last name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        {errors.lastName && <p>{errors.lastName}</p>}

        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          type="text"
          name="email"
          placeholder="enter email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p>{errors.email}</p>}

        <button type="submit" placeholder="log in">
          log in
        </button>
      </form>
    </>
  );
}

export default App;
