import React, { useState }from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import api from '../../api/axios'
var cvsuidholder = '';


function Home() {

    const [cvsuID, setcvsuID] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error_cvsuID, setError_cvsuID] = useState()
    const [error_password, setError_password] = useState()
    const [lock, setLock] = useState(false)
    const [attempt, setAttempt] = useState(1)

    const onChange = (e) => {
      const value = e.target.value.replace(/\D/g, "");
      setcvsuID(value)
      if (value === ""){
        setError_cvsuID("")
      } 
      else {
        setError_cvsuID("")
      }
    }

    const onChangePassword = (e) => {
      const value = e.target.value
      setPassword(value)
      if (!value) setError_password("")
   }

   // LOGIN ATTEMPT (UP TO 5 ATTEMPTS)
   const loginFailed = () => {
      if (cvsuidholder === '') {
        setAttempt(attempt+1)
        cvsuidholder = cvsuID
        setLock(false)
      }
      else if (cvsuidholder === cvsuID) {
        if(attempt < 5) {
          setAttempt(attempt+1)
          alert(`Login failed. Attempt: ${attempt}`)
        } else {
          golock()
        }
      }
      else {
        cvsuidholder = cvsuID
        setAttempt(attempt+1)
        setLock(false)
      }
      
   }

    const onSubmit = (data) => {
      checkCredentials(data);
    }
    
    const checkCredentials = (e) => {
      e.preventDefault()
      // IF BOTH IS EMPTY
      if (!cvsuID && !password){
        setError_cvsuID("CvSU ID is required")
        setError_password("Password is required")
        setLoading(false);
        // ELSE IF LENGTH OF CVSU ID IS LESS THAN FOUR
      } 
      else {
        // REMOVE ERROR FOR CVSU ID
        setError_cvsuID("")
        // IF PASSWORD IS EMPTY
        if (!password){
          setError_password("Password is required")
          setLoading(false);
            // ELSE IF LENGTH OF PASSWORD IS LESS THAN FOUR
        } 
        else {
            // LOGIN ATTEMPT
          setError_cvsuID("")
          setError_password("")
          login(e);
        }
      } 
    }

    const golock = async () => await api.post(`userlock/${cvsuID}`)

    // need mag lock sa backend para wlaang butas.
    const login = async (e) => {
      e.preventDefault();
      setLoading(true);
      //api 
      await api.post(`login`,{
        cvsu_id: cvsuID,
        password: password
      })
      .then(response => {
         // IF TRUE
        setLoading(false);
        if (response.data.user_status === 1) { 
          setError_password("Your account is temporary lock. please contact your admin")
        }
        else{
          alert('welcome!')
          localStorage.setItem('cvsuID',cvsuID)
          localStorage.setItem('userType',response.data.user_type)
          localStorage.setItem('isAuthenticated', true);
          window.location.href='/dashboard';
        }
        
      })
      .catch((err) => 
      {
        console.log(err);
        loginFailed(e)
        if(lock){
          setError_password("Your account is temporary lock. please contact your admin")
        } else { 
          setError_password("Incorrect CvSU ID / Password")
        }
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
                            placeholder="CvSU ID Number"
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
                            placeholder="Password"
                            name="password"
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
