import { useState,useEffect } from "react";
import { send } from 'emailjs-com';
import emailjs from 'emailjs-com';


import '../../src/App.css';

emailjs.init('pet-heave');

function Release() {


    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        number: '',
        animal: '',

      });
    
      const [status, setStatus] = useState('');



    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs.send(
        "petheaven02",
        "rehome",
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

                <h1> Rehome Form</h1> 
                <br></br>

                <h6> We understand challenging circumstances could pressure owners to rehome their pets and it’s never an easy process.</h6> 
                <h6>You may complete the online form below and we will revert back with the appointment slot for you to bring your pet over.</h6>
                <br></br>
                <div class='FormItem'>
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


                    <label>Type of animal:
                    <input type="text" name='animal'value={toSend.animal} onChange={handleChange}/>
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
    <p>Your Rehome Form have been submitted successfully! We will revert back to you on the Appointment date!</p>
  </div>
)
  
export default Release;



