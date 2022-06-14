import "./style.css"
import {useState} from "react";
import { showMessage } from "../../services/Alerts";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Objekat u kome su sacuvani paswword i email korisnika koji mogu da pristupe aplikaciji
    const data = [
        {
            email: "react@react.com",
            password: "react1"
        },
        {
            email: "class@class.com",
            password: "react2"
        }
    ]

    // Validacija da li je login i password dobar
    const submit = () => {
        const isLoginSucces = data.filter((d) => {
            return d.email === email && d.password === password;
        });
        if (isLoginSucces.length > 0) {
            props.setIsLoggedIn(true)
        } else {
            props.setIsLoggedIn(false)
            showMessage("Wrong credentials!", "error", "center", 3000)
        }
    }

    return (
        <>
            <div className="login-wrapper">
                <input 
                    type="text" 
                    placeholder="Enter email address" 
                    onChange={(e) => {setEmail(e.target.value)}}
                />
                <input 
                    type="password" 
                    placeholder="Enter password" 
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <button onClick={submit}>Login</button>
            </div>
        </>
    );
}