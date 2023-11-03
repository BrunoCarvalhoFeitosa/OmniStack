import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { FiLogIn } from 'react-icons/fi';
import brandImg from '../../assets/brand.svg';
import heroesImg from '../../assets/heroes.png';
import './style.css';

//Function to made logon of a ong
function Logon() {
    const [id, setId] = useState('');
    const navigate  = useNavigate();

    //Async function to create logon session of ong
    async function handleLogin(ev) {
        ev.preventDefault();

        try {
            const response = await api.post('sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            navigate('/profile');
        } catch(error) {
            alert('Falha no login, tente novamente.')
        }
    }

    return (
        <main className="b-logon-container">
            <section className="b-logon-form">
                <img src={brandImg} alt="Be The Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                        type="text"
                        value={id}
                        onChange={ev => setId(ev.target.value)}
                        placeholder="Sua ID" 
                    />
                    <button type="submit" className="button">Entrar</button>
                    
                    <div className="b-logon-register">
                        <Link to="/register" className="back-link">
                            <FiLogIn size={16} color="#E02041" />
                            Não tenho cadastro
                        </Link>
                    </div>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </main>
    );
}

export default Logon;