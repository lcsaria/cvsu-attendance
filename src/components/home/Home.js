import React, { useState }from 'react'
import * as ReactBootstrap from 'react-bootstrap'

import api from '../../api/axios'



function Home() {
    const [cvsuID, setcvsuID] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error_cvsuID, setError_cvsuID] = useState()
    const [error_password, setError_password] = useState()
    
    const onChange = (e) => {
      const value = e.target.value;
      setcvsuID(value)
      if (value === ""){
        setError_cvsuID("")
      } else if (value.length < 4){
        setError_cvsuID("CvSU ID must be at least 4 characters")
      } else {
        setError_cvsuID("")
      }
    }

    const onChangePassword = (e) => {
      const value = e.target.value.replace(/\D/g, "");
      setPassword(value)
      console.log(value)
      if (value === ""){
        setError_password("")
      } else if (value.length < 4){
        setError_password("Password must be at least 4 character")
      } else {
        setError_password("")
      }
      
   }

    const onSubmit = (data) => {
      checkCredentials(data);
    }
    
    const checkCredentials = (e) => {
      e.preventDefault()
      if (!cvsuID){
        setError_cvsuID("CvSU ID is required")
        setLoading(false);
      } else if (cvsuID.length < 4){
        setError_cvsuID("CvSU ID must be at least 4 characters")
        setLoading(false);
      } else {
        setError_cvsuID("")
      }

      if (!password){
        setError_password("Password is required")
        setLoading(false);
      } else if (password.length < 4){
        setError_password("Password must be at least 4 character")
        setLoading(false);
      } else {
        setError_cvsuID("")
        setError_password("")
        login(e);
        console.log(error_cvsuID, error_password)
      }
      
    }

    const login = (e) => {
      e.preventDefault();
      setLoading(true);
      console.log(cvsuID+ " -> "+password)
      console.log("try")
      //api 
      api.post(`login`,{
        cvsu_id: cvsuID,
        password: password
      })
      .then(response => {
        setLoading(false);
        console.log(JSON.stringify(response.data))
        alert('welcome!')
        localStorage.setItem('cvsuID',cvsuID)
        localStorage.setItem('userType',response.data)
        localStorage.setItem('isAuthenticated', true);
        console.log(localStorage.getItem('cvsuID'))
        console.log(localStorage.getItem('userType'))
        console.log(localStorage.getItem('isAuthenticated'))
        window.location.href='/dashboard';
      })
      .catch((err) => 
      {
        console.log(err)
        alert("Incorrect CvSU ID / Pin")
        setLoading(false);
        return
      })
    }

    return (
    <div className="bg-gradient-primary" style={{background: "#75a478"}}>
        <div className="container" style={{ marginTop: 150 }}>
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div 
                    className="col-lg-6 d-none d-lg-flex"
                    style={{
                        backgroundImage: `url(${require('../../assets/school-logo.png').default})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                      }}>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                      </div>
                        <form className="user">
                        <div className="form-group">
                          <input
                            className="form-control form-control-user mb-2"
                            type="text"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter CvSU ID"
                            name="cvsuid"
                            onChange={onChange}
                            autoFocus
                            autocomplete="off"
                            autofill={false}
                            value={cvsuID}
                          />
                          {
                            (!error_cvsuID) ? null :
                            <span className="ml-3 m-3 text-danger">{error_cvsuID}</span>
                          }
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user mb-2"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="4 Digit Pin"
                            name="password"
                            inputMode="numeric"
                            maxLength="4"
                            pattern="[0-9]*"
                            autocomplete="off"
                            autofill={false}
                            onChange={onChangePassword}
                            value={password}
                          />
                          {
                            (!error_password) ? null :
                            <span className="ml-3 m-3 text-danger">{error_password}</span>
                          }
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={onSubmit}
                          className="btn btn-success btn-block text-white btn-user"
                          disabled={loading}
                          //role="button"
                          //href="/dashboard"
                        >
                        {loading ? (
                          <div>
                            <span>
                              <ReactBootstrap.Spinner animation="border" className="spinner-border spinner-border-sm mr-2"/>
                            </span>
                            <span>Login</span>
                          </div>
                          ) : (
                          <span>Login</span>
                        )
                        }
                        </button>
                        <hr />
                      </form> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Home
