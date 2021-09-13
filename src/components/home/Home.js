import React, { useState }from 'react'
import api from '../../api/axios';

function Home() {
    const [cvsuID, setcvsuID] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
      console.log(cvsuID+ " -> "+password)
      if (!cvsuID) return alert('please enter cvsu ID!')
      if (!password) return alert('please enter password!')
      console.log("try")
      //api 
      api.get(`login/${cvsuID}/${password}`)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        alert('welcome!')
        localStorage.setItem('cvsuID',cvsuID)
        window.location.href='/dashboard';
      })
      .catch((err) => 
      {
        console.log(err.response.data)
        alert("Incorrect CvSU ID / Pin")
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
                      { /*<form className="user"> */ }
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="text"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter CvSU ID"
                            name="cvsuid"
                            onChange={(e)=>setcvsuID(e.target.value)}
                            autoFocus
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="4 Digit Pin"
                            name="password"
                            inputMode="numeric"
                            maxLength="4"
                            onChange={(e)=>setPassword(e.target.value)}
                          />
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
                          onClick={login}
                          className="btn btn-success btn-block text-white btn-user"
                          //role="button"
                          //href="/dashboard"
                        >
                          Login
                        </button>
                        <hr />
                      {/*</form> */}
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
