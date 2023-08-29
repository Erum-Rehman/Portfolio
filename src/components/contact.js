import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      success: false,
      loading: false,
      fname: '',
      lname: '',
      email: '',
      contact: '',
      company: '',
      message: '',
      errors: {
        fname: '',
        lname: '',
        email: '',
        contact: '',
        company: '',
        message: '',
        requiredFieldError: '',
      }
    }
  }
  handleSubmit = async () => {
    const { fname, lname, email, contact, company, message } = this.state;
    if (fname === '' || lname === '' || email === '' || contact === '' || message === '') {
      this.setState({
        errors: {
          requiredFieldError: 'Please fill out all the required fields'
        }
      })
    }
    else {
      this.setState({loading: true})
      axios.post('https://tranquil-gorge-12858.herokuapp.com/contact', {
        fname, lname, email, contact, company, message
      }).then(data=> {
        console.log(data,"data")
        if(data.data.success === true){
          this.setState({
            msg: 'Message sent successfully',
            success: true,
            loading: false,
            fname: '',
            lname: '',
            email: '',
            contact: '',
            company: '',
            message: '',
          })
        }
        else{
          this.setState({
            msg: 'Unable to send message',
          })
        }
      }
      )
    }

  }

  handleChange = (event) => {
    event.preventDefault(event);
    const { name, value } = event.target;
    let errors = this.state.errors;
    const validEmailRegex =
      RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (name) {
      case 'fname':
        errors.fname =
          value.length < 3
            ? 'First Name must be 3 characters long!'
            : '';
        break;

      case 'lname':
        errors.lname =
          value.length < 3
            ? 'Last Name must be 3 characters long!'
            : '';
        break;

      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;

      case 'contact':
        errors.contact =
          value.length < 11
            ? 'Contact number must be 11 characters long!'
            : '';
        break;

      case 'message':
        errors.message =
          (value.length < 20 || value === '')
            ? 'Message must be 20 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({ errors, [name]: value }, () => {
      console.log(errors)
    })
  }
  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-sm-12">
          <h1 className="resume-heading" style={{ textAlign: 'center', color: "white" }}>
            Contact
                    </h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-sm-5 col-5"></div>
        {this.state.loading===true && <div className="col-sm-2" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: "white"}}><CircularProgress disableShrink style={{color:"white"}}/><br/>loading....</div>}
          {this.state.errors.requiredFieldError !== '' &&
            <div className='info col-12 col-sm-12'>
              <p style={{ color: "red", textAlign: 'center' }}>{this.state.errors.requiredFieldError}</p>
            </div>
          }
        </div>
        {this.state.msg !== '' &&
          <div className="row">
            <div className='info col-12 col-sm-12'>
              <div class={this.state.success === true ? "alert alert-success alert-dismissible fade show" : "alert alert-danger alert-dismissible fade show"} role="alert">
                <strong>{this.state.success === true ? "Success!" : "Failed!"}</strong> {this.state.msg}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close" onClick={() => this.setState({ msg: '' })}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>

          </div>
        }
        <div className="row">
          <div className="col-12 col-sm-4">
            <div class="form-group">
              <label for="fname">First Name: <span style={{ color: 'red', fontSize: 20 }}>*</span></label>
              <input type="text" class="form-control" id="fname" name="fname"
                onChange={this.handleChange} value={this.state.fname} noValidate
              />
              {this.state.errors.fname !== '' &&
                <div className='info'>
                  <small style={{ color: "red" }}>{this.state.errors.fname}</small>
                </div>
              }
            </div>

          </div>

          <div className="col-12 col-sm-4">
            <div class="form-group">
              <label for="lname">Last Name: <span style={{ color: 'red', fontSize: 20 }}>*</span></label>
              <input type="text" class="form-control" id="lname" name="lname"
                onChange={this.handleChange} value={this.state.lname} noValidate
              />
              {this.state.errors.lname !== '' &&
                <div className='info'>
                  <small style={{ color: "red" }}>{this.state.errors.lname}</small>
                </div>
              }
            </div>
          </div>

          <div className="col-12 col-sm-4">
            <div class="form-group">
              <label for="contact">Contact Number: <span style={{ color: 'red', fontSize: 20 }}>*</span></label>
              <input type="tel" class="form-control" id="contact" name="contact"
                onChange={this.handleChange} value={this.state.contact} noValidate
              />
              {this.state.errors.contact !== '' &&
                <div className='info'>
                  <small style={{ color: "red" }}>{this.state.errors.contact}</small>
                </div>
              }
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6">
            <div class="form-group">
              <label for="email">Email Address: <span style={{ color: 'red', fontSize: 20 }}>*</span></label>
              <input type="email" class="form-control" id="email" name="email"
                onChange={this.handleChange} value={this.state.email} noValidate
              />
              {this.state.errors.email !== '' &&
                <div className='info'>
                  <small style={{ color: "red" }}>{this.state.errors.email}</small>
                </div>
              }
            </div>
          </div>
          <div className="col-12 col-sm-6">
            <div class="form-group">
              <label for="company">Company:</label>
              <input type="text" class="form-control" id="company" name="company"
                onChange={this.handleChange} value={this.state.company} noValidate
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12">
            <div class="form-group">
              <label for="comment">Your Message: <span style={{ color: 'red', fontSize: 20 }}>*</span></label>
              <textarea class="form-control" rows="10" id="comment" name="message"
                onChange={this.handleChange} value={this.state.message} noValidate
              ></textarea>
              {this.state.errors.message !== '' &&
                <div className='info'>
                  <small style={{ color: "red" }}>{this.state.errors.message}</small>
                </div>
              }
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12">
            <button onClick={this.handleSubmit} className="btn btn-primary "
              style={{ float: 'right' }}>Send Message</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}