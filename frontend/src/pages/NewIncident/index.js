import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import brandImg from '../../assets/brand.svg';

//Function to render a new incident component and storage states of inputs
function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');

    //Async function to register a new incident
    async function handleNewIncident(ev) {
        ev.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch(error) {
            alert('Erro ao cadastrar caso, tente novamente');
        }
    }

    return (
        <main className="b-new-incident-container">
            <div className="b-new-incident-content">
                <section className="b-new-incident-apresentation">
                    <img src={brandImg} alt="Be The Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <div className="b-logon">
                        <Link to="/profile" className="back-link">
                            <FiArrowLeft size={16} color="#E02041" />
                            Voltar para home
                        </Link>
                    </div>
                </section>
                <form className="b-new-incident-form" onSubmit={handleNewIncident}>
                    <input type="text" 
                        value={title}
                        onChange={ev => setTitle(ev.target.value)}
                        placeholder="Título do caso" />
                    <textarea 
                        value={description}
                        onChange={ev => setDescription(ev.target.value)}
                        placeholder="Descrição" />
                    <input type="text" 
                        value={value}
                        onChange={ev => setValue(ev.target.value)}
                        placeholder="Valor em reais" />
                    <button type="submit" className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </main>
    );
}

export default NewIncident;