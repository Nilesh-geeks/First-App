import React from 'react'
import ScriptTag from 'react-script-tag';
export default function About(props) {
   

    const Demo = props => (
    <ScriptTag type="text/javascript" src="https://smtpjs.com/v3/smtp.js" />
    )
    
    function SendEmail(){
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "nileshsln34@gmail.com",
            Password : "1826C60B7A565BF4487749EDE15366DC68E6",
            To : 'kaptaan10c@gmail.com',
            From : 'nileshsln34@gmail.com',
            Subject : "This is the subject",
            Body : 
            " Email : "+ document.getElementById("exampleInputEmail1").value+
           "Password : " + document.getElementById("exampleCheck1").value
        
        }).then(
            message => alert(message)
            );
        }
    return (
        <>
        <div className="container">
           <h2 style={{color: props.mode === 'light' ? '#042743' : 'white'}}>{props.about}</h2>
           <h2 style={{color: props.mode === 'light' ? '#042743' : 'white'}}>To Contact Us fill the form below</h2>
           <h3 style={{color: props.mode === 'light' ? '#042743' : 'white'}}>We will shortly contact you.</h3>
           <form action="/" onsubmit={SendEmail} method="POST" id="contact" class="from-group">
                <div className="form-group">
                    <label for="exampleInputEmail1" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey',color: props.mode === 'light' ? '#042743' : 'white'}}/>
                        <small id="emailHelp" className="form-text text-muted" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlfor="exampleInputPassword1" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey',color: props.mode === 'light' ? '#042743' : 'white'}}/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey',color: props.mode === 'light' ? '#042743' : 'white'}}/>
                        <label className="form-check-label" htmlfor="exampleCheck1" style={{color: props.mode === 'light' ? '#042743' : 'white'}}>Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}
