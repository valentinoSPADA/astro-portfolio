import React, { useRef, useState } from 'react'
import '../styles/contact.css'
import emailjs from '@emailjs/browser';

function Contact() {

    const [input, setInput] = useState({ email: "", fullName: "", message: "" })
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.init('Ig8ljByvT3Ay-sxsx')
        emailjs.sendForm('service_u404lst', 'template_7xd702a', form.current)
            .then((result) => {
                return result
            }, (error) => {
                return error
            });
        setInput({ email: "", fullName: "", message: "" })
    };

    const handleInputChange = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }



    return (
        <main id='contact' className='main-contact'>
            <div className="title-center">
                <span className="surname">C</span>ontacto
            </div>
            <section className='content content-contact'>
                <form className='form' ref={form} onSubmit={(e) => sendEmail(e)}>
                    <div className="field field_v1">
                        <input className="field__input" name='fullName' value={input.fullName} onChange={handleInputChange} type='text' placeholder="Ej.: Valentino Spada" />
                        <span className="field__label-wrap" aria-hidden="true">
                            <span className="field__label">Nombre</span>
                        </span>
                    </div>
                    <div className="field field_v1">
                        <input className="field__input" name='email' value={input.email} onChange={handleInputChange} type='mail' placeholder="Ej.: valenspada@hotmail.com" />
                        <span className="field__label-wrap" aria-hidden="true">
                            <span className="field__label">Mail</span>
                        </span>
                    </div>
                    <div className="field_text">
                        <textarea rows="6" cols="33" className="textarea" name='message' value={input.message} onChange={handleInputChange} placeholder='Mensaje...' />
                    </div>

                    <button className="button-37" role="button" type='submit'>Enviar</button>


                </form>
            </section>

        </main>
    )
}

export default Contact