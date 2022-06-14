import Note from "./Note"

export default function NotesList(props) {
    return (
        <div className="notes-list">
            {props.notes.map((note, index) => {
            return <Note  title={note.title} content={note.content} key={index} />
            })}
                
        </div>
    );
}