import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderField = ({ input, meta: { error, touched }, label }) => {
    return (
      <div className="mb-3">
        <label>{label}</label>
        <input
          {...input}
          className={`form-control ${error && touched ? "is-invalid" : ""}`}
        />
        {error && touched ? (
          <div className="invalid-feedback">
            {label.split("Enter")[1]} is required
          </div>
        ) : null}
      </div>
    );
  };
  required = (value) => (value ? undefined : "This field is required!");
  render() {
    // console.log(this.props);
    const { handleSubmit, onSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Field
          name="title"
          label="Enter title"
          component={this.renderField}
          validate={this.required}
        />
        <Field
          name="description"
          label="Enter description"
          component={this.renderField}
          validate={this.required}
        />
        <Field
          name="link"
          label="Enter link"
          component={this.renderField}
          validate={this.required}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "createStream",
  enableReinitialize: true,
})(StreamForm);
