const FormMail = () => {

    return (
        <form className="bloc-form">
            <section className="bloc-form_section">
                <h2>Mail</h2>
                <input type="text" placeholder="Mail" />
                <input type="text" placeholder="Subject" />
                <textarea className="textAreaMail" placeholder="Message" name="" id="" cols="30" rows="10"></textarea>
                <button className="sendButtonMail" type="submit">Send</button>
            </section>
        </form>
    );
};

export default FormMail;
