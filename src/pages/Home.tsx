import React, {useState} from "react";
import {NotesTable} from "../components/NotesTable/NotesTable";
import {NoteForm} from "../components/NoteForm/NoteForm";
import {SummaryTable} from "../components/SummaryTable/SummaryTable";
import {notesList} from "../store/notes";

export const Home: React.FC = () => {
    const [notes] = useState(notesList)

    return (
        <div className="container pt-4">
            <h2>Notes App</h2>

            <NotesTable notes={notes} />

            <div className="row pb-5 justify-content-end">
               <NoteForm />
            </div>

            <SummaryTable notes={notes} />
        </div>
    )
}