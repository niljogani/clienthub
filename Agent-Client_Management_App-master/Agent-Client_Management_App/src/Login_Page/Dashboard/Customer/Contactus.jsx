// import React, { useRef, useState } from 'react';
// import axios from 'axios';
// import emailjs from '@emailjs/browser';

// const Contactus = () => {
//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const [message,setMessage] = useState("");

//   const handleEmail = async (e) => {
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

//   const data = {
//     service_id: serviceId,
//     template_id: templateID,
//     user_id: publicKey,
//     template_params: {
//       from_name: name,
//       from_email: email,
//       to_name: "Nil Jogani",
//       message: message,
//     }
//   }

//   try {
//      const res =  await axios.post("https://api.emailjs.com/v1.0/email/send", data);
//     console.log(res.data);
//     setName('');
//     setEmail('');
//     setMessage('');
//   }

//   catch(error) {
//     console.error(error);
//   }
// }
 
//   return (
//     <form onSubmit={handleEmail} >
//       <label>Name</label>
//       <input type="text" name="user_name" 
//       onChange={(e) => setName(e.target.value)}
//        />
//       <label>Email</label>
//       <input type="email" name="user_email" 
//       onChange={(e) => setName(e.target.value)} 
//       />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type=" submit" value="Send"
//        onChange={(e) => setName(e.target.value)}
//         />
//         <button type='submit'>Click me</button>
//     </form>
//   );
// };

// export default Contactus
