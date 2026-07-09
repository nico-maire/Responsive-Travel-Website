// RETURNS THE HTML STRING
export const renderContact = () => {
    return `        
        <div class="cc-wrapper">
            <h2 class="cc-title" data-i18n="contact_title">¿Tienes alguna duda?</h2>
            <p class="cc-subtitle" data-i18n="contact_subtitle">Contacta con nosotros</p>
            
            <form id="contact-component-form" class="cc-form">
                <div class="cc-row">
                    <input 
                        type="email" 
                        name="email" 
                        class="cc-input" 
                        placeholder="you@example.com"
                        data-i18n-placeholder="contact_email_ph" 
                        aria-label="Dirección de correo electrónico"
                        data-i18n-aria="contact_email_aria"
                        required
                    >
                    <button type="submit" class="cc-btn" data-i18n="contact_submit">Submit</button>
                </div>
                
                <textarea 
                    name="message" 
                    class="cc-textarea" 
                    placeholder="Escribe aqui tu consulta ..."
                    data-i18n-placeholder="contact_msg_ph" 
                    aria-label="Escribe aquí tu consulta"
                    data-i18n-aria="contact_msg_aria"
                    required
                ></textarea>
            </form>
        </div>
    `;
};

// ACTIVATES THE LOGIC
export const setupContact = () => {
    const form = document.getElementById('contact-component-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // 1. Capture Data
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('textarea[name="message"]').value;

            const newContact = {
                id: Date.now(),
                email: email,
                message: message,
                date: new Date().toLocaleString()
            };

            // 2. Save to LocalStorage
            const storedMessages = JSON.parse(localStorage.getItem('contact_messages')) || [];
            storedMessages.push(newContact);
            localStorage.setItem('contact_messages', JSON.stringify(storedMessages));

            // 3. Feedback
            console.log('Saved:', newContact);
            alert('Mensaje guardado en LocalStorage');
            form.reset();
        });
    } else {
        console.error("Contact form not found in DOM. Make sure you rendered it first.");
    }
};