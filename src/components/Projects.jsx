import React, { useState } from 'react'
import '../styles/projects.css'
import { projects } from '../assets/projectsMock'

function Projects() {

    const [items, setItems] = useState(projects);
    const [description, setDescription] = useState('')

    function onSelect(index) {
        const updatedItems = items.map((item, i) => {
            if (i === index) {
                setDescription(item.description)
                return { ...item, selected: true };
            }
            return { ...item, selected: false };
        });
        setItems(updatedItems);
    }

    return (
        <div className="projects-container">
            <div className='title-container'>
                <h2 className="projects">Proyectos</h2>
                <p className='projects-subtitle'>PROFESIONALES</p>
            </div>
            <ul className="projects-items-container">
                {items?.map((item, index) => {
                    return (
                        <div className='div-item' key={index} onClick={() => onSelect(index)}>
                            <span className={`line ${item.selected ? 'selected' : ''}`}></span>
                            <li key={index} className={`p-title ${item.selected ? 'selected' : ''}`}>
                                {item.name}
                            </li>
                        </div>
                    )
                })}
            </ul>
            <div className='platform-stack-container-mobile'>
                <div className='stack-container'>
                    {
                        items.some(item => item.selected === true) &&
                        <h3 className='stack-title'>STACK TECNOLOGICO</h3>
                    }
                    {
                        (items[0].selected || items[2].selected) &&
                        <ul className='stack-list'>
                            <li className='delay-0 stack-li'>
                                TypeScript
                            </li>
                            <li className='delay-1 stack-li'>
                                React
                            </li>
                            <li className='delay-2 stack-li'>
                                MobX
                            </li>
                            <li className='delay-3 stack-li'>
                                AntDesign
                            </li>
                            <li className='delay-4 stack-li'>
                                SCSS
                            </li>
                        </ul>
                    }
                    {
                        items[1].selected &&
                        <ul className='stack-list'>
                            <li className='delay-0 stack-li'>
                                TypeScript
                            </li>
                            <li className='delay-1 stack-li'>
                                Angular
                            </li>
                            <li className='delay-2 stack-li'>
                                Material UI
                            </li>
                            <li className='delay-3 stack-li'>
                                SCSS
                            </li>
                        </ul>
                    }
                </div>
            </div>
            <div className='platform-description-container'>
                <div className="buble buble-2"></div>
                <div className="buble buble-3"></div>
                <div className="buble buble-1"></div>
                {
                    items[0].selected &&
                    <p className="projects-description">
                        Plataforma de <span className="text-bold">envío de órdenes</span> con visores de precios <span className="text-bold">en tiempo real</span> conectados a los mercados <span className="text-italic">ByMA, Matba Rofex y Ufex</span>.
                        Algunas de sus características son:
                        <br></br> <span className="text-bold">TradingView</span> para análisis técnico habilitado,
                        Manejo de Carteras,
                        Integración con los principales backoffice del Mercado,
                        Conexión a <span className="text-bold">APIs FIX, REST</span> y <span className="text-bold">Websocket</span>,
                        entre otras.
                        <br></br>
                        La plataforma ha sido <span className="text-bold">premiada</span> y es utilizada por los <span className="text-bold">brokers más grandes de Argentina</span>.
                        <br></br>
                        Mi rol es desarrollar <span className="text-bold">nuevas features</span> y mantener el proyecto, corrigiendo errores y actualizándolo a las <span className="text-bold">últimas tecnologías</span>.
                        <br></br>
                        <br></br>
                        <a href='https://www.youtube.com/watch?v=bXPjquWOCss&ab_channel=Primary' target='_blank' className='text-underlined'> Aquí podrás ver un video demo</a>.
                    </p>
                }
                {
                    items[1].selected &&
                    <p className="projects-description">
                        Plataforma de <span className="text-bold">administración y envío de órdenes</span> a mercados con <span className="text-bold">gestión de riesgos</span>.
                        <br></br>
                        Gestión centralizada de cuentas, roles y usuarios. Diversidad de terminales de visualización
                        de precios y <span className="text-bold">ejecución de órdenes</span> para inversores.
                        <br></br>
                        Brindamos soporte tecnológico para la administración de <span className="text-bold">10 Millones</span> de usuarios que operan FCI (Fondos Comunes de
                        Inversión) mediante ALyCs, remunerando sus saldos a través de <span className="text-bold">billeteras digitales líderes en el mercado</span> y
                        soportados por <span className="text-bold">nuestra tecnología</span>.
                        <br></br>
                        Mi rol es <span className="text-bold">liderar</span> a nivel Front, desarrollar <span className="text-bold">nuevas features</span> y mantener el proyecto, corrigiendo errores y actualizándolo a las
                        <span className="text-bold"> últimas tecnologías</span>.
                        <br></br>
                        <br></br>
                        <a href='https://youtu.be/m6zXPRMlm64?t=644'  target='_blank' className='text-underlined'> Aquí podrás ver un video demo</a>.
                    </p>
                }
                {
                    items[2].selected &&
                    <p className="projects-description">
                        Un <span className="text-bold">visor de precios</span> del mercado <span className="text-italic">Matba Rofex</span> y también <span className="text-italic">UFEX</span>. Es un visor de <span className="text-bold">acceso libre</span>.
                        <br></br>
                        Aquí se podrán ver una <span className="text-bold">vista general de los instrumentos</span> o con más detalle el historial de cada uno
                        y <span className="text-bold">todas sus características</span>.
                        <br></br>
                        Mi rol es desarrollar <span className="text-bold">nuevas features</span> y mantener el proyecto, corrigiendo errores y actualizándolo a las <span className="text-bold">últimas tecnologías</span>.
                        <br></br>
                        <br></br>
                        <a href='https://matbarofex.primary.ventures/futuros/financieros' target='_blank' className='text-underlined'>Aquí te dejo el enlace</a>.
                    </p>
                }
            </div>
            <div className='platform-stack-container'>
                <div className='stack-container'>
                    {
                        items.some(item => item.selected === true) &&
                        <h3 className='stack-title'>STACK TECNOLOGICO</h3>
                    }
                    {
                        (items[0].selected || items[2].selected) &&
                        <ul className='stack-list'>
                            <li className='delay-0 stack-li'>
                                TypeScript
                            </li>
                            <li className='delay-1 stack-li'>
                                React
                            </li>
                            <li className='delay-2 stack-li'>
                                MobX
                            </li>
                            <li className='delay-3 stack-li'>
                                AntDesign
                            </li>
                            <li className='delay-4 stack-li'>
                                SCSS
                            </li>
                        </ul>
                    }
                    {
                        items[1].selected &&
                        <ul className='stack-list'>
                            <li className='delay-0 stack-li'>
                                TypeScript
                            </li>
                            <li className='delay-1 stack-li'>
                                Angular
                            </li>
                            <li className='delay-2 stack-li'>
                                Material UI
                            </li>
                            <li className='delay-3 stack-li'>
                                SCSS
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects