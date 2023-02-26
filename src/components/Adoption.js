import { useState,useEffect } from "react";
import '../../src/App.css';
import emailjs from 'emailjs-com';



const Adoption = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        email: '',
        number: '',
        pet_id: '',
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

                <h1> Adoption Form</h1> 
                <br></br>

                <h6> Thank you for your interest in adopting an animal! All visits are now by appointment only. You may complete the online form below and we will contact you on the appointment slot</h6> 
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


                    <label>Enter pet ID you wish to adopt:
                    <input type="text" name='pet_id'value={toSend.pet_id} onChange={handleChange}/>
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
    <p>Your Adoption Form have been submitted successfully! We will revert back to you on the Appointment date!</p>
  </div>
)
  
export default Adoption;


