import { useState } from "react";

const Register = () => {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChance = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  return (
    <div className="account-column">
      <h2>Kayıt Ol</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı Adı <span className="required">*</span>
            </span>
            <input type="text" onChange={handleInputChance} name="username" />
          </label>
        </div>
        <div>
          <label>
            <span>
              E-posta Adresi <span className="required">*</span>
            </span>
            <input type="email" onChange={handleInputChance} name="email" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={handleInputChance}
              name="password"
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
            Kişisel verileriniz, bu web sitesi üzerinden deneyiminizi
            desteklemek, hesabınıza erişimi yönetmek ve gizlilik politikamızda
            açıklanan diğer amaçlarla kullanılacaktır.
          </p>
          <button className="btn btn-sm">Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
};
export default Register;
