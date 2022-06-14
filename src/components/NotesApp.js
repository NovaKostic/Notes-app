import Header from "./Header";
import { showMessage } from "../services/Alerts";
import { isFieldEmpty } from "../services/Validate";
import {useState} from "react"
import NotesList from "./NotesList";

export default function NotesApp(props) {
        // State varijable koje cuvaju nase podatke
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    

    // funkcija koja cuva title nouta
    const saveTitle = (event) => {
        setTitle(event.target.value);
    }
    // Funkcija koja cuva content nouta
    const saveContent = (event) => {
        setContent(event.target.value);
    }
    // Funkcija koja cuva  noutove
    const saveNote = () => {   

        // validacija ulaza podataka, da li ima nesto upisano u polje title, ako nema izlazi eroro i cim se sve popuni error nestaje
        if (!isFieldEmpty(title) > 0 && !isFieldEmpty(content) > 0) {
        let note = {
            title:title,
            content:content
        }
        setNotes([...notes, note]);
        // Insatliran sweetalert paket preko npm-a koji izbacuje popupove i koji se nalazi ./services/alerts.js
        // Parametri su dati da servis bio dinamican i da bi servis bio reuseble
        showMessage('You have succesfuly created a new note', "success","center", 3000);
        
        } else {
        showMessage("Title or content are empty", "error", "center", 3000)
        
    }
}
    return (
        <>
            <Header setIsLoggedIn={props.isLoggedIn} />
            
            <NotesList notes={notes} />

            <hr/>
            <div className="create-note">
                <input 
                type="text" 
                placeholder="Enter title" 
                onChange={(event) => {saveTitle(event)}}
                />
                <input   
                placeholder="Enter content"
                onChange={(event) => {saveContent(event)}}

            />
                <button onClick={saveNote}>Create</button>      
            </div>
        </>
    );
}