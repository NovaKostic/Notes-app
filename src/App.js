import "./styles/main.css";
import Login from "./components/login/Login";
import NotesApp from "./components/NotesApp";
import {useState} from "react";


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    // Logovanje korinika, ako korisnik nije Logovan prikazati Log in komponentu 
    // Ako jeste uci u aplikaciju i pokazati NotesApp gde je smestena cela app
    <>
    
    {!isLoggedIn && (
      <Login setIsLoggedIn = {setIsLoggedIn} />
    )}

    {isLoggedIn && (
      <NotesApp isLoggedIn={setIsLoggedIn} />
    )}
    </>
  );
 }
