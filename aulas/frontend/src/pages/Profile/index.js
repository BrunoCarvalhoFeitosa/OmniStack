import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiPower } from 'react-icons/fi';
import { FiTrash2 } from 'react-icons/fi';
import './style.css';
import brandImg from '../../assets/brand.svg';

//Function to render profile of a ong using useEffect to get profile in specific moment
function Profile() {
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    //Function to get all cases of specific ong
    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongId]);

    //Async fuction to delete incidents by id of ong
    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(incidents => incidents.id !== id));
        } catch(error) {
            alert('Erro ao deletar caso, tente novamente');
        }
    }

    //Function to made logout and clear localStorage
    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    return (
        <main className="b-profile-container">
            <header className="b-profile-header">
                <img src={brandImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to="/incidents/new" className="button">Cadastrar novo caso</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={28} color="#E02041" />
                </button>
            </header>

            <section className="b-profile-incidents">
                <h1>Casos Cadastrados</h1>

                <ul>
                    {incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO:</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                            <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
                                <FiTrash2 size={20} color="#A8A8B3" />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Profile;