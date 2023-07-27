const Account = ({ onAccountClick }) => {

    const login = document.querySelector(".login-form");
    const signup = document.querySelector(".signup-form");

    const closeWindow = () => {
        onAccountClick();

        const bgElement = document.getElementsByClassName("bg")[0];
        if (bgElement) {
            bgElement.style.display = "none";
        }
      };
      const showSignup = () => {
        console.log("showSignup");
        console.log("login:", login); 
        console.log("signup:", signup); 
        if (login) {
          
          login.style.display = "none";
        }
        if (signup) {
        
          signup.style.display = "block";
        }
      };
    const showLogin = () => {
        if (login) {
            login.style.display ="block";
        }
        if (signup) {
            signup.style.display ="none";
        }
    };

    return (
        <div className="bg">
            <div className="rect">
                <button onClick={closeWindow} className="closeBtn">X</button>
                <div className="login-form">
                    <h2 className="title">Login</h2>
                    <div className="login">

                        <input type="text" placeholder="username"/>
                        <input type="password" placeholder="password" />
                        <span className="dont" onClick={showSignup}>Don't already have an account?</span>
                        <button>LOGIN</button>

                    </div>
                </div>

                <div className="signup-form">
                    <h2 className="title">Sign up</h2>
                    <div className="signup">

                        <input type="email" placeholder="john@pizzmail.com" />
                        <input type="password" placeholder="password" />
                        <input type="password" placeholder="confirm password" />
                        <span className="have" onClick={showLogin}>have an account?</span>
                        <button>SIGN UP</button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Account;