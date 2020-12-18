import React from "react";
import "../App.css";
import styled from "styled-components";

const ErrorStyle = styled.div`
  color: red;
`;

const TermStyle = styled.div`
  font-size: 1.3rem;
  color: black;
  transition: ease-in-out 0.5s red;
`;

export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUSe = type === "checkbox" ? checked : value;
    change(name, valueToUSe);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Add a User</h2>
        <button className="submit1" disabled={disabled}>
          submit
        </button>
        <ErrorStyle>
          <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.confirmpassword}</div>
            <div>{errors.termsofservice}</div>
          </div>
        </ErrorStyle>
      </div>

      <div className="form-group inputs">
        <h4>General information</h4>
        <label>
          Username
          <input
            value={values.username}
            onChange={onChange}
            name="username"
            type="text"
          />
        </label>

        <label>
          Email
          <input
            value={values.email}
            onChange={onChange}
            name="email"
            type="text"
          />
        </label>

        <label>
          Password
          <input
            value={values.password}
            onChange={onChange}
            name="password"
            type="text"
          />
        </label>
      </div>
      <div className="form-group checkboxes">
        <h4>Terms of service</h4>
        <TermStyle>
          <label>
            Agree to our terms of service
            <input
              type="checkbox"
              name="termsofservice"
              checked={values.termsofservice}
              onChange={onChange}
            />
          </label>
        </TermStyle>
      </div>
    </form>
  );
}
