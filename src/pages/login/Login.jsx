import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Uniconect</h3>
          <span className="loginDesc">
            Conecta con Estudiantes y sus Proyectos.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">¿Olvidáste tu Contraseña?</span>
            <button className="loginRegisterButton">
              Crear una Nueva Cuenta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
