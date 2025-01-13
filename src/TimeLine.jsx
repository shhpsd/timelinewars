import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const wars = [
    {
      name: "Guerra de los Treinta Años",
      start_date: "1618",
      end_date: "1648",
      location: "Europa Central",
      description: "Conflicto religioso y político entre las potencias católicas y protestantes de Europa.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://www.gob.mx/cms/uploads/image/file/651747/guerra_de_ref.jpg",
      flags: [
        "https://flagcdn.com/w320/de.png", // Alemania
        "https://flagcdn.com/w320/es.png", // España
        "https://flagcdn.com/w320/fr.png", // Francia
        "https://flagcdn.com/w320/hu.png", // Hungría
      ],
      type: "Guerra religiosa",
    },
    {
      name: "Guerra de Sucesión Española",
      start_date: "1701",
      end_date: "1714",
      location: "Europa",
      description: "Conflicto por el control del trono español tras la muerte sin herederos de Carlos II.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Villars_a_Denain1.jpg/600px-Villars_a_Denain1.jpg",
      flags: [
        "https://flagcdn.com/w320/es.png", // España
        "https://flagcdn.com/w320/gb.png", // Reino Unido
        "https://flagcdn.com/w320/fr.png", // Francia
      ],
      type: "Guerra dinástica",
    },
    {
      name: "Revolución Americana",
      start_date: "1775",
      end_date: "1783",
      location: "Estados Unidos",
      description: "Conflicto entre las trece colonias americanas y el Reino Unido, que culminó en la independencia de los Estados Unidos.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/600px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg",
      flags: [
        "https://flagcdn.com/w320/us.png", // Estados Unidos
        "https://flagcdn.com/w320/gb.png", // Reino Unido
      ],
      type: "Revolución",
    },
    {
      name: "Guerras Napoleónicas",
      start_date: "1803",
      end_date: "1815",
      location: "Europa",
      description: "Serie de conflictos militares liderados por Napoleón Bonaparte contra diversas coaliciones europeas.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/La_bataille_d%27Austerlitz._2_decembre_1805_%28François_Gérard%29.jpg/600px-La_bataille_d%27Austerlitz._2_decembre_1805_%28François_Gérard%29.jpg",
      flags: [
        "https://flagcdn.com/w320/fr.png", // Francia
        "https://flagcdn.com/w320/gb.png", // Reino Unido
        "https://flagcdn.com/w320/de.png", // Prusia
      ],
      type: "Guerra imperial",
    },
    {
      name: "Guerra Civil de los Estados Unidos",
      start_date: "1861",
      end_date: "1865",
      location: "Estados Unidos",
      description: "Conflicto armado entre los estados del norte (Unión) y los estados del sur (Confederados).",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/CivilWarUSAColl.png",
      flags: [
        "https://flagcdn.com/w320/us.png", // Estados Unidos
      ],
      type: "Guerra civil",
    },
    {
      name: "Primera Guerra Mundial",
      start_date: "1914",
      end_date: "1918",
      location: "Europa",
      description: "Conflicto global entre potencias aliadas y centrales.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7f/PrimeraGuerraMundial-collague.jpg",
      flags: [
        "https://flagcdn.com/w320/fr.png", // Francia
        "https://flagcdn.com/w320/gb.png", // Reino Unido
        "https://flagcdn.com/w320/de.png", // Alemania
      ],
      type: "Guerra mundial",
    },
    {
      name: "Segunda Guerra Mundial",
      start_date: "1939",
      end_date: "1945",
      location: "Global",
      description: "Conflicto más grande y mortal de la historia.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/WW2Montage.PNG",
      flags: [
        "https://flagcdn.com/w320/us.png", // Estados Unidos
        "https://flagcdn.com/w320/gb.png", // Reino Unido
        "https://flagcdn.com/w320/de.png", // Alemania
        "https://flagcdn.com/w320/jp.png", // Japón
      ],
      type: "Guerra mundial",
    },
    {
      name: "Guerra Fría",
      start_date: "1947",
      end_date: "1991",
      location: "Global",
      description: "Larga lucha geopolítica entre los bloques liderados por EE. UU. y la URSS, sin conflictos armados directos, pero con muchas guerras indirectas.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pavnattack.jpg/288px-Pavnattack.jpg",
      flags: [
        "https://flagcdn.com/w320/us.png", // Estados Unidos
        "https://flagcdn.com/w320/ru.png", // URSS
      ],
      type: "Guerra geopolítica",
    },
    {
      name: "Guerra de Corea",
      start_date: "1950",
      end_date: "1953",
      location: "Corea del Norte y del Sur",
      description: "Enfrentamiento entre Corea del Norte (apoyada por China y la URSS) y Corea del Sur (apoyada por EE. UU.).",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Korean_War_Montage_2.png/600px-Korean_War_Montage_2.png",
      flags: [
        "https://flagcdn.com/w320/kr.png", // Corea del Sur
        "https://flagcdn.com/w320/kp.png", // Corea del Norte
      ],
      type: "Guerra fría",
    },
    {
      name: "Guerra de Vietnam",
      start_date: "1955",
      end_date: "1975",
      location: "Vietnam",
      description: "Conflicto entre Vietnam del Norte (comunista) y Vietnam del Sur (apoyado por EE. UU.).",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/VietnamMural.jpg",
      flags: [
        "https://flagcdn.com/w320/vn.png", // Vietnam
      ],
      type: "Guerra fría",
    },
    {
      name: "Guerra de los Seis Días",
      start_date: "1967",
      end_date: "1967",
      location: "Oriente Medio",
      description: "Conflicto breve entre Israel y una coalición árabe liderada por Egipto, Siria y Jordania.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/6_Day_War-Amos.jpg/600px-6_Day_War-Amos.jpg",
      flags: [
        "https://flagcdn.com/w320/il.png", // Israel
        "https://flagcdn.com/w320/eg.png", // Egipto
        "https://flagcdn.com/w320/sy.png", // Siria
      ],
      type: "Guerra regional",
    },
    {
      name: "Guerra del Golfo",
      start_date: "1990",
      end_date: "1991",
      location: "Oriente Medio",
      description: "Conflicto desencadenado por la invasión de Kuwait por parte de Irak.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/3/35/WarGulf_photobox.jpg",
      flags: [
        "https://flagcdn.com/w320/iq.png", // Irak
        "https://flagcdn.com/w320/kw.png", // Kuwait
      ],
      type: "Guerra regional",
    },
    {
      name: "Guerra de Bosnia",
      start_date: "1992",
      end_date: "1995",
      location: "Bosnia y Herzegovina",
      description: "Conflicto armado que resultó de la desintegración de Yugoslavia, involucrando a Bosnia, Croacia, Serbia y otros actores.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Bosnian_war_header.no.png/300px-Bosnian_war_header.no.png",
      flags: [
        "https://flagcdn.com/w320/ba.png", // Bosnia y Herzegovina
      ],
      type: "Guerra regional",
    },
    {
      name: "Guerra de Afganistán",
      start_date: "2001",
      end_date: "2021",
      location: "Afganistán",
      description: "Intervención militar liderada por Estados Unidos tras los atentados del 11 de septiembre.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Collage_of_the_War_in_Afghanistan_%282001-2021%29.png",
      flags: [
        "https://flagcdn.com/w320/af.png", // Afganistán
        "https://flagcdn.com/w320/us.png", // Estados Unidos
      ],
      type: "Guerra internacional",
    },
    {
      name: "Guerra Civil Siria",
      start_date: "2011",
      end_date: "Actualidad",
      location: "Siria",
      description: "Conflicto armado que involucra al gobierno sirio, opositores y múltiples actores internacionales.",
      color: "#5C4033",  // Variación de color terroso
      image: "https://c.files.bbci.co.uk/958B/production/_117538283_gettyimages-933029510.jpg",
      flags: [
        "https://flagcdn.com/w320/sy.png", // Siria
      ],
      type: "Guerra civil",
    },
  ];

const Timeline = () => {
  const [filteredWars, setFilteredWars] = useState(wars);
  const [selectedType, setSelectedType] = useState("Todos");

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setSelectedType(value);
    if (value === "Todos") {
      setFilteredWars(wars);
    } else {
      setFilteredWars(wars.filter(war => war.type === value));
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <label style={{color:"white"}} htmlFor="war-type">Filtrar por tipo de guerra: </label>
        <select
            id="war-type"
            onChange={handleFilterChange}
            value={selectedType}
            style={{ padding: "8px", marginLeft: "10px" }}
            >
            <option value="Todos">Todos</option>
            <option value="Guerra medieval">Medieval</option>
            <option value="Guerra civil">Civil</option>
            <option value="Guerra mundial">Mundial</option>
            <option value="Guerra geopolítica">Geopolítica</option>
            <option value="Guerra regional">Regional</option>
            <option value="Guerra internacional">Internacional</option>
        </select>
      </div>

      <VerticalTimeline lineColor="#ddd">
        {filteredWars.map((war, index) => (
          <VerticalTimelineElement
            key={index}
            date={`${war.start_date} - ${war.end_date}`}
            iconStyle={{ background: war.color, color: "#fff" }}
            contentStyle={{ background: war.color, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid ${war.color}` }}
          >
            <img
              src={war.image}
              alt={war.name}
              style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            />
            <h3 style={{fontSize: "46px", margin: "0px"}}>{war.name}</h3>
            <p>{war.location}</p>
            <div>
              {war.flags.map((flag, index) => (
                <img
                  key={index}
                  src={flag}
                  alt={`flag ${index + 1}`}
                  style={{
                    width: "30px",
                    height: "auto",
                    marginTop: "10px",
                    marginRight: "5px",
                    marginLeft: "5px",
                    borderRadius: "5px",
                  }}
                />
              ))}
            </div>
            <p>{war.description}</p>

          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      
    </div>
  );
};

export default Timeline;