import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './style.css';
import brandImg from '../../assets/brand.svg';

//Function to render component and storage states of inputs
function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();
    
    //Async function to register a new ong
    async function handleRegister(ev) {
        ev.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch(error) {
            alert('Erro ao realizar cadastro, tente novamente.');
        }
    }

    return (
        <main className="b-register-container">
            <div className="b-register-content">
                <section className="b-register-apresentation">
                    <img src={brandImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <div className="b-logon">
                        <Link to="/register" className="back-link">
                            <FiArrowLeft size={16} color="#E02041" />
                            Não tenho cadastro
                        </Link>
                    </div>
                </section>
                <form className="b-register-form" onSubmit={handleRegister}>
                    <input 
                        type="text"
                        value={name}
                        onChange={ev => setName(ev.target.value)}
                        placeholder="Nome da ONG" 
                    />
                    <input 
                        type="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                        placeholder="E-mail" 
                    />
                    <input 
                        type="text"
                        value={whatsapp}
                        onChange={ev => setWhatsapp(ev.target.value)}
                        placeholder="WhatsApp"
                    />
                    <div className="input-group">
                        <input
                            type="text"
                            value={city}
                            onChange={ev => setCity(ev.target.value)}
                            placeholder="Cidade"
                        />
                        <input
                            type="text"
                            value={uf}
                            onChange={ev => setUf(ev.target.value)}
                            placeholder="UF"
                            style={{ width: 80 }}
                        />
                    </div>
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </main>
    );
}

export default Register;