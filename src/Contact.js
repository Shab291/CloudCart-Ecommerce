import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

  const { user, isAuthenticated } = useAuth0();


  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108954.68475769328!2d73.029599264135!3d31.418702156103596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a2f5be33f3%3A0x6a214e1f73edd114!2sClock%20Tower%20Faisalabad!5e0!3m2!1sen!2s!4v1739861007126!5m2!1sen!2s" title="my-frame" width="100%" height="420" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">

        <form action="https://formspree.io/f/mwpvwjyy" method="POST" className="contact-inputs">

          <input 
          type="text" 
          placeholder="username" 
          name="username"
          value={ isAuthenticated ? user.name : ""} 
          required autoComplete="off" />


          <input 
          type="email" 
          name="Email"
          value={ isAuthenticated ? user.email : ""} 
          placeholder="Your Email" 
          required autoComplete="off" />

          <textarea 
          name="Message" 
          cols="30" 
          rows="10" 
          required autoComplete="off" 
          placeholder="Enter your Message"></textarea>

          <input type="submit" value="Send" />

       </form>
      </div>
    </div>

  </Wrapper>;
};

export default Contact;
