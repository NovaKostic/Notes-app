import "../styles/note.css"

export default function Note(props) {
    return (
        <div className="note">
            <div className="content">
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
        </div>
    );
}