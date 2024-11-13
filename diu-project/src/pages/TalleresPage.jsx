import React from 'react';
import BackButton from '../components/BackButton';
import Header from '../components/Header';
import '../styles/TalleresPage.css';

const TalleresPage = () => {
  const talleres = [
    {
      categoria: 'Talleres Deportivos',
      descripcion: 'Los Talleres Deportivos son una instancia recreativa voluntaria, que permite al estudiante desarrollar hábitos de vida saludable de manera complementaria a su formación profesional.',
      items: [
        { nombre: 'Ajedrez', campus: 'Campus Casa Central', profesor: 'Raúl Molina Muñoz', recinto: 'Sala de Estar', horarios: 'Jueves: 12:30 - 13:40' },
        { nombre: 'Tenis de Mesa', campus: 'Campus San Joaquín', profesor: 'Isabel Castillo Barrera', recinto: 'Gimnasio', horarios: 'Jueves: 17:10 - 18:20' },
        { nombre: 'Básquetbol', campus: 'Campus Casa Central', profesor: 'Antonio López Pérez', recinto: 'Cancha 5x5', horarios: 'Viernes: 12:30 - 13:40' },
        { nombre: 'Básquetbol 3x3', campus: 'Campus San Joaquín / Vitacura', profesor: 'Felipe Reyes Sangermani', recinto: 'Gimnasio', horarios: 'Lunes: 13:25 - 14:25 (Vitacura), Martes: 12:15 - 13:25 (San Joaquín)' },
        { nombre: 'Fútbol', campus: 'Campus Casa Central', profesor: 'Pablo Fernández Troncoso', recinto: 'Estadio USM', horarios: 'Lunes: 17:30 - 18:40' },
        { nombre: 'Karate', campus: 'Campus San Joaquín / Vitacura', profesor: 'Patricio Cifra Abarca', recinto: 'Gimnasio', horarios: 'Jueves: 13:25 - 14:25 (San Joaquín), Martes: 12:15 - 13:25 (Vitacura)' },
        { nombre: 'Futsal', campus: 'Campus Casa Central', profesor: 'Pablo Fernández Troncoso', recinto: 'Cancha 7x7', horarios: 'Miércoles: 17:30 - 18:40' },
        { nombre: 'Gimnasia Artística', campus: 'Campus Casa Central', profesor: 'Bruce Gallardo', recinto: 'Gimnasio 1', horarios: 'Martes y Jueves: 12:30 - 13:40' },
        { nombre: 'Judo', campus: 'Campus Casa Central', profesor: 'Gastón Vergara Verdejo', recinto: 'Sala Multiuso Gimnasio 3', horarios: 'Lunes: 20:15 - 21:25, Miércoles: 18:50 - 20:00, Viernes: 17:30 - 18:40' },
        { nombre: 'Running', campus: 'Campus Casa Central', profesor: 'Miguel Gonzalez Vergara', recinto: 'Pista Atlética Estadio USM', horarios: 'Martes y Jueves: 11:05 - 12:15' },
        { nombre: 'Tenis', campus: 'Campus Casa Central', profesor: 'Enrique Cabello Contreras', recinto: 'Cancha Tenis', horarios: 'Jueves: 11:05 - 12:15' },
        { nombre: 'Balonmano', campus: 'Campus San Joaquín', profesor: 'José Sanchez Maldonado', recinto: 'Gimnasio', horarios: 'Viernes: 13:25 - 14:25' },
        { nombre: 'Taekwondo', campus: 'Campus Casa Central', profesor: 'Sebastián Aguilar Gajardo', recinto: 'Gimnasio 2', horarios: 'Martes: 17:30 - 18:40, Viernes: 16:05 - 17:15' },
        { nombre: 'Vóleibol Playa', campus: 'Campus San Joaquín', profesor: 'Luis Bugueño Lizana', recinto: 'Cancha Vóleibol Playa', horarios: 'Lunes: 17:10 - 18:20' },
        { nombre: 'Ultimate Frisbee', campus: 'Campus Casa Central', profesor: 'Carlos Pérez', recinto: 'Cancha de Pasto', horarios: 'Miércoles: 15:00 - 16:30' },
      ],
    },
    {
      categoria: 'Talleres Fitness',
      descripcion: 'Los Talleres Fitness son espacios dedicados al desarrollo físico, donde los estudiantes pueden mejorar su condición física y adquirir hábitos saludables.',
      items: [
        { nombre: 'Entrenamiento Funcional', campus: 'Campus Casa Central', profesor: 'Karen Cea', recinto: 'Sala Fitness', horarios: 'Lunes y Miércoles: 18:00 - 19:00' },
        { nombre: 'GAP', campus: 'Campus Casa Central', profesor: 'María López', recinto: 'Sala de Danza', horarios: 'Martes y Jueves: 16:00 - 17:00' },
        { nombre: 'Pilates', campus: 'Campus Casa Central', profesor: 'Ana Pérez', recinto: 'Sala Multiuso', horarios: 'Miércoles y Viernes: 10:00 - 11:00' },
        { nombre: 'TRX', campus: 'Campus Casa Central', profesor: 'Luis Gómez', recinto: 'Sala de Pesas', horarios: 'Martes y Jueves: 12:00 - 13:00' },
        { nombre: 'Yoga', campus: 'Campus Casa Central', profesor: 'Nicole Monsalve Vargas', recinto: 'Sala Multiuso Gimnasio 3', horarios: 'Lunes: 10:55 - 12:05 y Jueves 15:50 - 17:00' },
        { nombre: 'Spinning', campus: 'Campus San Joaquín', profesor: 'Valeska Ahumada', recinto: 'Sala de Spinning', horarios: 'Martes: 12:20 - 13:00, 13:10 - 14:00; Jueves: 12:20 - 13:00, 13:10 - 14:00' },
      ],
    },
    {
      categoria: 'Talleres Artísticos y Culturales',
      descripcion: 'Los Talleres Artísticos son instancias recreativas voluntarias que permiten al estudiante una expresión artística y cultural que aporta a su formación integral.',
      items: [
        { nombre: 'Danza Contemporánea', campus: 'Campus Casa Central', profesor: 'Eveleen Rojas Salgado', recinto: 'Gimnasio 2', horarios: 'Lunes: 17:30 - 18:40' },
        { nombre: 'Danza', campus: 'Campus San Joaquín / Vitacura', profesor: 'Haruko Tsukame Saez', recinto: 'Sala Multiuso San Joaquín / Gimnasio Vitacura', horarios: 'Martes: 12:15 - 13:25 (San Joaquín), Viernes: 15:00 - 17:00 (San Joaquín), Jueves: 12:15 - 13:25 (Vitacura)' },
        { nombre: 'Folclor', campus: 'Campus Casa Central', profesor: 'Eveleen Rojas Salgado', recinto: 'Sala Multiuso Gimnasio 3', horarios: 'Martes: 11:05 - 13:40' },
        { nombre: 'Teatro', campus: 'Campus San Joaquín / Vitacura', profesor: 'José Gallardo Hurtado', recinto: 'TAM San Joaquín / Belloto 1 Vitacura', horarios: 'Jueves: 12:15 - 13:25 (San Joaquín), Martes: 12:15 - 13:25 (Vitacura)' },
        { nombre: 'Salsa', campus: 'Campus San Joaquín / Vitacura', profesor: 'Haruko Tsukame Saez', recinto: 'Sala Multiuso, San Joaquín / Gimnasio Vitacura', horarios: 'Viernes: 12:15 - 13:25 (San Joaquín), Jueves: 12:25 - 14:25 (Vitacura)' },
      ],
    },
  ];

  // Función para asignar una clase CSS en función del nombre del taller
  const getImageClass = (nombre) => {
    return nombre.toLowerCase().replace(/\s+/g, '').replace(/[áéíóú]/g, (m) => 'aeiou'['áéíóú'.indexOf(m)]);
  };

  return (
    <div className="talleres-container">
      <Header />
      <BackButton />
      {talleres.map((categoria, index) => (
        <div key={index} className="categoria-section">
          <h2 className="categoria-titulo">{categoria.categoria}</h2>
          <p className="categoria-descripcion">{categoria.descripcion}</p>
          <div className="talleres-lista">
            {categoria.items.map((taller, idx) => (
              <div key={idx} className={`taller-item ${getImageClass(taller.nombre)}`}>
                <div className="taller-nombre">{taller.nombre}</div>
                <div className="taller-campus">{taller.campus}</div>
                <div className="taller-info">
                  <p><strong>Profesor:</strong> {taller.profesor}</p>
                  <p><strong>Recinto:</strong> {taller.recinto}</p>
                  <p><strong>Horarios:</strong> {taller.horarios}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TalleresPage;
