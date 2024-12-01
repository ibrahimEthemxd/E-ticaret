import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChance = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Kayıt İşlemi Başarılı");
        navigate("/");
      } else {
        message.error("Kayıt İşlemi Başarısız.");
      }
    } catch (error) {
      console.log(error, "Giriş Hatası");
    }
  };

  return (
    <div className="account-column">
      <h2>Kayıt Ol</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>
            <span>
              Kullanıcı Adı <span className="required">*</span>
            </span>
            <input
              type="text"
              onChange={handleInputChance}
              name="username"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              E-posta Adresi <span className="required">*</span>
            </span>
            <input
              type="email"
              onChange={handleInputChance}
              name="email"
              required
            />
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
              required
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
