import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class AuthForm extends Component {
  // Render field functions:
  renderinput = (formvalues) => {
    // console.log(formvalues);
    const {
      input,
      label,
      meta: { error, touched },
      type,
    } = formvalues;
    return (
      <>
        <label className="form-label">{label}</label>
        <input
          className={`form-control ${error && touched ? "is-invalid" : ""}`}
          {...input}
          type={type}
        />
        {error && touched ? (
          <div className="invalid-feedback">{label} is required</div>
        ) : null}
      </>
    );
  };
  // Validators
  required = (value) => (value ? undefined : "This field is required");

  render() {
    // console.log(this.props);
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <Field
              name="username"
              label="Username"
              type="text"
              component={this.renderinput}
              validate={this.required}
            />
          </div>
          <div className="mb-3">
            <Field
              name="password"
              label="Password"
              type="password"
              component={this.renderinput}
              validate={this.required}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "authForm",
})(AuthForm);
