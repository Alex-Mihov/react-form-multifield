import { useState } from 'react';

const initialBooksList = [
    {
        id: 1,
        titolo: "Il Signore degli Anelli",
        autore: "J.R.R. Tolkien",
        contenuto: "Un'epica avventura fantasy ambientata nella Terra di Mezzo.",
        categoria: "Fantasy"
    },
    {
        id: 2,
        titolo: "1984",
        autore: "George Orwell",
        contenuto: "Un romanzo distopico che esplora i pericoli del totalitarismo.",
        categoria: "Fantascienza"
    },
    {
        id: 3,
        titolo: "Orgoglio e Pregiudizio",
        autore: "Jane Austen",
        contenuto: "Una storia d'amore e di classe sociale nell'Inghilterra del XIX secolo.",
        categoria: "Romanzo"
    },
    {
        id: 4,
        titolo: "Il Codice da Vinci",
        autore: "Dan Brown",
        contenuto: "Un thriller che combina arte, storia e mistero in una caccia al tesoro globale.",
        categoria: "Thriller"
    },
    {
        id: 5,
        titolo: "Sapiens: Da animali a dèi",
        autore: "Yuval Noah Harari",
        contenuto: "Un saggio sulla storia dell'umanità, dalle origini ai giorni nostri.",
        categoria: "Saggistica"
    }
];

const initialFormData = {
    id: "",
    titolo: "",
    autore: "",
    contenuto: "",
    categoria: ""
}



export default function ListaLibri() {

    // useState per gestione dei data array di oggetti iniziale
    const [lista, setLista] = useState(initialBooksList);

    // useState per gestire info dai form
    const [formData, setFormData] = useState(initialFormData)

    // funzione per gestione dell'invio del form 
    function gestioneSubmit(e) {
        e.preventDefault();
        setLista((listaCorrente) => [...listaCorrente, {
            id: listaCorrente.length === 0 ? 1 : listaCorrente[listaCorrente.length - 1].id + 1, ...formData
        }]);

        // reset form
        setFormData(initialFormData)
    }

    // funzione gestione delle info from
    function gestioneDatiFrom(e) {
        // setto tramite setState l'oggetto con le info del form
        setFormData((currentFormData) => ({
            ...currentFormData,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <>
            {/* titolo pagina */}
            <h1>Lista Libri</h1>

            {/* campo input */}
            <form className='formLibro' onSubmit={gestioneSubmit}>

                {/* titolo libro */}
                <input
                    type="text"
                    name='titolo'
                    onChange={gestioneDatiFrom}
                    value={formData.titolo}
                    placeholder="Titolo Libro"
                />

                {/* autore libro */}
                <input
                    type="text"
                    name='autore'
                    onChange={gestioneDatiFrom}
                    value={formData.autore}
                    placeholder='Nome Autore'
                />

                {/* contenuto libro */}
                <textarea
                    name="contenuto"
                    onChange={gestioneDatiFrom}
                    value={formData.contenuto}
                    placeholder='Contenuto Libro'
                ></textarea>

                {/* categoria libro */}
                <input
                    type="text"
                    name='categoria'
                    onChange={gestioneDatiFrom}
                    value={formData.categoria}
                    placeholder='Categoria Libro'
                />

                {/* bottone invio */}
                <button>Aggiugi</button>
            </form>




            {/* lista iniziale */}
            {
                lista.map((libro) => (

                    <div className='listaLibri' key={libro.id}>
                        <h2>{libro.titolo}</h2>
                        <h3>{libro.autore}</h3>
                        <span>{libro.contenuto}</span>
                        <h4>{libro.categoria}</h4>
                    </div>
                ))
            }


        </>
    )

}
