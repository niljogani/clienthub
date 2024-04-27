// import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';

//  const ContactUsForm = () => {
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [message,setMessage] = useState("");

//   const handleEmail = (e) => {
//     e.preventDefault()

//     const serviceId = "service_9oxu6tm";
//     const templateID = "template_ggzmyta";
//     const publicKey = "gnvqKt4BAcNczF8Ej";
  

//   const templateParams = {
//     from_name: name,
//     from_email: email,
//     to_name: 'client hub',
//     message: message,
//   };


// emailjs.send(serviceId,templateID,publicKey,templateParams)
//   .then((response) => {
//     console.log("hello : ", response);
//     setName('');
//     setEmail('');
//     setMessage('');
//   })
//   .catch((error) =>  {
//     console.log("hello : ", error);

//   })
   
  
// }
 
//   return (
//     <form onSubmit={handleEmail} className='oppp'>
//       <label>Name</label>
//       <input type="text" name="user_name" onChange={(e) => setName(e.target.value)} />
//       <label>Email</label>
//       <input type="email" name="user_email" onChange={(e) => setEmail(e.target.value)} />
//       <label>Message</label>
//       <textarea name="message" onChange={(e) => setMessage(e.target.value)} />

//       <button type='submit'>Send me</button>
//     </form>
//   );
// };

// export default ContactUsForm