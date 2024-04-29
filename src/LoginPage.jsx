import { React , useEffect , useState } from "react"
import { useContext } from "react"
import { Context } from "./context/firebaseAuthContext"
import { useToggle } from "./hooks/toggle"
import "./styles/login.css"
import assets from "./assets/assets/assets"
import swal from "sweetalert"
import { Navigate } from "react-router"

export const Login = () => {
    const { signUp , login , Error , loginUsingGoogle  , currentUser} = useContext(Context);
    const [ LoginOrSignUp , Toggle] = useToggle();
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    useEffect(() => {
        console.log(Error); 
        if(Error) swal(LoginOrSignUp ? "Login failed": "sign up failed", LoginOrSignUp ? "Check your email and password again": "This email already exists", "error");
    }, [Error])

    function handleOperation(){
        if(LoginOrSignUp) login(email , password);
        else signUp(email , password);
    }
    return(
        <>
                <div className="container min-w-full">

                <div className="left flex flex-col justify-center items-center">

                    <div className="header">

                        <h2 className="animation a1 text-3xl">{LoginOrSignUp ? "Welcome Back" : "Welcome"}</h2>
                        <h4 className="animation a2">{LoginOrSignUp ? "Log in to your account" : "Sign up"} using email and password</h4>
                    
                    </div>


                    <div className="form">

                        <input type="email" className="form-field animation a3 w-full" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" className="form-field animation a4" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                        <p className="animation a5 flex justify-between ">
                            <button className="animation a5 text-sm hover:text-blue-400 transition-colors" onClick={Toggle}>{LoginOrSignUp ? "Create Account" : "I already have an account"}</button>
                            { LoginOrSignUp && <a className="hover:text-blue-400 transition-colors" href="#">Forgot Password ?</a> }
                        </p>

                        <button className="animation a6" onClick={handleOperation}>{LoginOrSignUp ? "LOGIN" : "SIGN UP"}</button>

                        <button className="animation a6 group bg-transparent flex justify-center items-center gap-3" onClick={loginUsingGoogle}>
                            <div className="w-6 group-hover:hidden">
                                <img src={assets.google_icon} alt="google-icon-png" />
                            </div>
                            <div className="w-6 hidden group-hover:inline transition delay-300">
                                <img src={assets.google_icon_blue} alt="google-icon-png" />
                            </div>
                            {LoginOrSignUp ? "Login using Google" : "Sign up using Google"}
                        </button>

                    </div>

                </div>
                    <div className="right"></div>
                    { currentUser !== null ? <Navigate replace to="/home" /> : null}
                </div>
        </>
    );
}