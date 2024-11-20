import React from "react";
import "./Footer.css";
import Policy from "../Policy/Policy";

const Footer = () => {
  return (
    <React.Fragment>
      <Policy />
      <footer className="footer">
        <div className="subscribe-row">
          <div className="container">
            <div className="footer-row-wrapper">
              <div className="footer-subscribe-wrapper">
                <div className="footer-subscribe">
                  <div className="footer-subscribe-top">
                    <h3 className="subscribe-title">
                      Yeni ürünler, indirimler ve daha fazlası hakkında bilgi
                      almak için e-postalarımızı alın.
                    </h3>
                    <p className="subscribe-desc">
                      İlk 1000₺ üzeri siparişinizde geçerli 150₺ indirim kuponu
                      gönderelim.
                    </p>
                  </div>
                  <div className="footer-subscribe-bottom">
                    <form>
                      <input type="text" placeholder="Email Adresini gir" />
                      <button className="btn">ABONE OL</button>
                    </form>
                    <p className="privacy-text">
                      Abone olarak{" "}
                      <a href="#">
                        Şartlar & Koşullar ve Gizlilik & Çerez Politikasını
                        kabul etmiş oluyorsunuz.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-contact-wrapper">
                <div className="footer-contact-top">
                  <h3 className="contact-title">
                    Yardım için <br />
                    (+90) 530 220 6127
                  </h3>
                  <p className="contact-desc">
                    08:00 - 19:00 saatleri arasında hizmetinizdeyiz.
                  </p>
                </div>
                <div className="footer-contact-bottom">
                  <div className="download-app">
                    <a href="#">
                      <img src="/img/footer/app-store.png" alt="" />
                    </a>
                    <a href="#">
                      <img src="/img/footer/google-play.png" alt="" />
                    </a>
                  </div>
                  <p className="privacy-text">
                    <strong>Alışveriş Uygulaması:</strong> Odanda Görüntüle
                    özelliğimizi deneyin, kayıtları yönetin ve ödeme
                    bilgilerinizi kaydedin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="widgets-row">
          <div className="container">
            <div className="footer-widgets">
              <div className="brand-info">
                <div className="footer-logo">
                  <a href="index.html" className="logo">
                    ETHOS
                  </a>
                </div>
                <div className="footer-desc">
                  <p> Ethos Sana Uygun, Sana Yakın.</p>
                </div>
                <div className="footer-contact">
                  <p>
                    <a href="tel:555 555 55 55">(+90) 530 220 6127 </a> –{" "}
                    <a href="mailto:info@example.com">ibrhm8581@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="widget-nav-menu">
                <h4>Bilgiler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li>
                    <a href="#">İade Politikası</a>
                  </li>
                  <li>
                    <a href="#">Teslimat Politikası</a>
                  </li>
                  <li>
                    <a href="#">Dropshipping</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Hesap</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Kontrol Paneli</a>
                  </li>
                  <li>
                    <a href="#">Siparişlerim</a>
                  </li>
                  <li>
                    <a href="#">Favorilerim</a>
                  </li>
                  <li>
                    <a href="#">Hesap Bilgileri</a>
                  </li>
                  <li>
                    <a href="#">Sipariş Takibi</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Alışveriş</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">En Güncel Ürünler</a>
                  </li>
                  <li>
                    <a href="#">En Çok Satanlar</a>
                  </li>
                  <li>
                    <a href="#">İndirimler</a>
                  </li>
                  <li>
                    <a href="#">Yeni Ürünler</a>
                  </li>
                  <li>
                    <a href="#">İndirimli Ürünler</a>
                  </li>
                </ul>
              </div>
              <div className="widget-nav-menu">
                <h4>Kategoriler</h4>
                <ul className="menu-list">
                  <li>
                    <a href="#">Kadın</a>
                  </li>
                  <li>
                    <a href="#">Erkek</a>
                  </li>
                  <li>
                    <a href="#">Çantalar</a>
                  </li>
                  <li>
                    <a href="#">Dış Giyim</a>
                  </li>
                  <li>
                    <a href="#">İç Giyim</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-row">
          <div className="container">
            <div className="footer-copyright">
              <div className="site-copyright">
                <p>
                  Telif Hakkı 2024 © E-Ticaret Teması. Tüm hakları saklıdır.
                  Powered by İEÖ.
                </p>
              </div>
              <a href="#">
                <img src="/img/footer/cards.png" alt="" />
              </a>
              <div className="footer-menu">
                <ul className="footer-menu-list">
                  <li className="list-item">
                    <a href="#">Gizlilik Politikası</a>
                  </li>
                  <li className="list-item">
                    <a href="#">Şartlar ve Koşullar</a>
                  </li>
                  <li className="list-item">
                    <a href="#">İade Politikası</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
