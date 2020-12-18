import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import Form from "./components/Form";
import User from "./components/User";
import schema from "./components/formSchema";
import styled from "styled-components";

const StyledCard = styled.div`
  color: black;
  font-size: 2rem;
`;

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  // confirmpassword: "",
  termsofservice: false,
};
const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  // confirmpassword: "",
  termsofservice: false,
};

const initailUsers = [];
const initialDisabled = true;

export default function App() {
  const [user, setUser] = useState(initailUsers); // array of User objects
  const [formValues, setFormValues] = useState(initialFormValues); // object
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean

  const getUser = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        setUser([res.data, ...user]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUser([res.data, ...user]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value) // validate this value
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsofservice: formValues.termsofservice,
    };
    postUser(newUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="container">
      <StyledCard>
        <header>
          <h1>Welcome to Twin barrel brewing</h1>
        </header>
      </StyledCard>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {user.map((users) => {
        return <User key={users.id} details={users} />;
      })}
    </div>
  );
}
