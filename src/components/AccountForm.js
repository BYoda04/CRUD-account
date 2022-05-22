import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AccountForm = ({getAccounts,accountSelected,deselectAccount}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [birthday,setBirthday] = useState("")

    useEffect(() => {
        if (accountSelected !== null) {
          setEmail(accountSelected.email)
          setPassword(accountSelected.password)
          setFirstName(accountSelected.first_name)
          setLastName(accountSelected.last_name)
          setBirthday(accountSelected.birthday)
        } else {
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
            setBirthday("")
        }
      }, [accountSelected])

    const submit = e=>{
        e.preventDefault()
        const account = {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            birthday
        }
        if (accountSelected !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${accountSelected.id}/`,account)
                .then(() => {
                    getAccounts()
                    deselectAccount()
                })
                .catch((error) => console.log(error.response))
        } else {
            axios.post(`https://users-crud1.herokuapp.com/users/`,account)
                .then(() => {
                    getAccounts()
                    setEmail("")
                    setPassword("")
                    setFirstName("")
                    setLastName("")
                    setBirthday("")
                })
                .catch((error) => console.log(error.response))
        }
    }

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalToggleLabel">Account Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={submit}>
                                <div className="mb-3 row">
                                    <label htmlFor='email' className="col-4 col-form-label">Email</label>
                                    <input type="email" className="form-control col" id="email" aria-describedby="emailHelp" onChange={e=>setEmail(e.target.value)} value={email}/>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor='password' className="form-label col-4">Password</label>
                                    <input type="password" className="form-control col" id="password" onChange={e=>setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor='firstName' className="form-label col-4">First Name</label>
                                    <input type="text" className="form-control col" id="firstName" onChange={e=>setFirstName(e.target.value)} value={firstName}/>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor='lastName' className="form-label col-4">Last Name</label>
                                    <input type="text" className="form-control col" id="lastName" onChange={e=>setLastName(e.target.value)} value={lastName}/>
                                </div>
                                <div className="mb-3 row">
                                    <label htmlFor='birthday' className="form-label col-4">Birthday</label>
                                    <input type="date" className="form-control col" id="birthday" onChange={e=>setBirthday(e.target.value)} value={birthday}/>
                                </div>
                                <div className="mb-3 row">
                                    <button type="submit" className="btn btn-primary col send" data-bs-dismiss="modal">Agree</button>
                                    <button type="button" className="btn btn-danger col cancel" data-bs-dismiss="modal" onClick={()=>deselectAccount()}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onClick={()=>deselectAccount()}>Create Account</a>
            <button type="button" class="btn btn-info" onClick={()=>getAccounts()}>Update</button>
        </>
    );
};

export default AccountForm;