const Login = () => {
  return (
    <div className="account-column">
      <h2>Giriş Yap</h2>
      <form>
        <div>
          <label>
            <span>
              Kullanıcı Adı veya E-posta Adresi{" "}
              <span className="required">*</span>
            </span>
            <input type="text" />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input type="password" />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Beni Hatırla</span>
          </label>
          <button className="btn btn-sm">Giriş Yap</button>
        </p>
        <a href="#" className="form-link">
          Şifrenizi mi unuttunuz?
        </a>
      </form>
    </div>
  );
};
export default Login;
