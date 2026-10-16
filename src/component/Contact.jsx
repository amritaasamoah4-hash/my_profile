import { useState } from 'react';
  
function Contacts({ email }) {
    const [form ,setForm] = useState({ name: '', message: '' });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const subject =encodeURIComponent('Message from $ {form.name}');
        const body =encodeURIComponent(form.message);
       window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        setForm({ name: '', message: '' });
    }

    return (
        <section id="contacts" className="section">
            <h2 className="section-title">Contact Me</h2>
            <form  className="contact-form"onSubmit={handleSubmit}>
                <input
                   name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />  
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit"className="btn">Send Message</button>
            </form>
        </section>
    );
}

export default Contacts;
