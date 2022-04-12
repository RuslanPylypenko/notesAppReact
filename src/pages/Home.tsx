import {NotesTable} from "../components/NotesTable/NotesTable";
import {NoteForm} from "../components/NoteForm/NoteForm";
import {SummaryTable} from "../components/SummaryTable/SummaryTable";

export const Home: React.FC = () => {

    return (
        <div className="container pt-4">
            <h2>Notes App</h2>

            <NotesTable/>

            <div className="row pb-5 justify-content-end">
               <NoteForm />
            </div>

            <SummaryTable />
        </div>
    )
}