import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.2951022594066!2d26.420781532711548!3d40.113426561298674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b1a82ca9b99cfd%3A0xf803b1ad12ea8904!2s%C3%87anakkale%20Onsekiz%20Mart%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1732105610577!5m2!1str!2str"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div className="container">
          <div className="contact-titles">
            <h4>Bizimle iletişime geçin</h4>
            <h2>Sorularınız İçin Bize Ulaşın</h2>
            <p>
              Her türlü sorunuz ve geri bildiriminiz için buradayız.
              İhtiyaçlarınıza çözüm sunmak için size yardımcı olmaktan mutluluk
              duyarız. Hemen bizimle iletişime geçin ve size nasıl yardımcı
              olabileceğimizi öğrenin!
            </p>
          </div>
          <div className="contact-elements">
            <form className="contact-form">
              <div className="">
                <label>
                  İsminiz
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Email
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Konu
                  <span>*</span>
                </label>
                <input type="text" required />
              </div>
              <div className="">
                <label>
                  Mesajınız
                  <span>*</span>
                </label>
                <textarea
                  id="author"
                  name="author"
                  type="text"
                  defaultValue=""
                  size="30"
                  required=""
                ></textarea>
              </div>
              <button className="btn btn-sm form-button">Mesaj Gönder</button>
            </form>
            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>Ethos Mağazası</strong>
                  <p className="contact-street">
                    Çanakkale Turkey — 785 15h Sokak, 17 BURDA AVM, De 81566
                  </p>
                  <a href="tel:Phone: +90 530 220 6127">
                    Phone: +90 530 220 6127
                  </a>
                  <a href="mailto:Email: contact@example.com">
                    Email: iethem6127@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-texts">
                  <strong>Çalışma Saatlerimiz</strong>
                  <p className="contact-date">Monday - Friday : 9am - 8pm</p>
                  <p>Weekend Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
