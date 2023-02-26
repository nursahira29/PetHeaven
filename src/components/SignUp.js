import { useState,useEffect } from "react";
import '../../src/App.css';
import emailjs from 'emailjs-com';



const SignUp = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        number: '',
      });

  const [status, setStatus] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "petheaven02",
      "emailPet",
      toSend,
      "R3EsBPLbbHkqy3xYE"
    )
    .then(response => {
      console.log('SUCCESS!', response);
      setToSend({
        fullName: '',
        email: '',
        role: '',
        message: ''
      });
      setStatus('SUCCESS');
    }, error => {
      console.log('FAILED...', error);
    });
}
  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setToSend(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))

};

  return (
      <>

        <section class="sectionR">
        {status && renderAlert()}

                <h1> SignUp Form</h1> 
                <br></br>

                <h6> Thank you for your interest! Help is never enough, and all support is greatly appreciated! </h6> 
                <br></br>
                
                <div className="FormItem">

                {<form onSubmit={handleSubmit}>
                    <label>Enter your name:
                        <input type="text" name='from_name'value={toSend.from_name} onChange={handleChange}/>
                    </label>
                    <br></br>
                    <br></br>

                    <label>Enter your email:
                    <input type="text" name='email'value={toSend.email} onChange={handleChange}/>
                    </label>
                    <br></br>
                    <br></br>

                    <label>Enter your phone number:
                    <input type="text" name='number'value={toSend.number} onChange={handleChange}/>
                    </label>
                    <br></br>
                    <br></br>

                    <input type="submit" value="Submit"></input>
                 </form>}
                 </div>

        </section>

        

            
    </>
    
  );

  
};

const renderAlert = () => (
  <div className="sectionM">
    <p>Your SignUp Form have been submitted successfully! We will reach out to you on the volunteering details!</p>
  </div>
)
  
export default SignUp;


