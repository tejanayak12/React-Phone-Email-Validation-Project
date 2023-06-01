import React from "react";

class FormEmailComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      isvalid: false,
      message: "PLease Enter UR Email...",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  emailValidation() {
    const regex =/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
    return !(!this.state.email || regex.test(this.state.email) === false);
  }

  onSubmit() {
    const isemailValid = this.emailValidation();
    this.setState(
      {
        isvalid: isemailValid,
        message: isemailValid
          ? "Email is Valid!"
          : "Email not valid!",
      },
      () => this.props.message
    );

    // Check if email is valid
    if (this.state.isvalid) {
      console.log(this.state);
    }
  }

  render() {
    const messageTemplate = this.state.message ? (
      <div
        className={"alert alert-" + (this.state.isvalid ? "success" : "danger")}
        role="alert"
      >
        {this.state.message}
      </div>
    ) : (
      ""
    );

    return (
      <div className="child-component">
        <div className="form-group mb-3">
          <label>
            <strong>Email</strong>
          </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="form-control"
          />
        </div>

        <div className="d-grid">
          <button
            type="text"
            className="btn btn-primary"
            onClick={() => this.onSubmit()}
          >
            Submit
          </button>
        </div>
        <br />
        {messageTemplate}
      </div>
    );
  }
}

export default FormEmailComponent;