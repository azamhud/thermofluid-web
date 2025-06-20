// src/pages/RegisterPage.tsx
import React, { useEffect, useState } from "react";
import "./RegisterPage.scss";
import edas from "../assets/edas.png";

const topics = [
  {
    title: "Fluid Dynamics",
    description:
      "Fluid dynamics is the subdiscipline of fluid mechanics that studies the flow of fluids. This is the study of the movements of liquids and gases, bringing together concepts from thermodynamics and material sciences. The field of fluid dynamics is often subdivided into several subdisciplines, including aerodynamics and hydrodynamics. Aerodynamics is the study of air and other gasses in motion and hydrodynamics is the study of liquids in motion. Scientists use both experiments and mathematical models and calculations to understand and applicate the study of fluid dynamics. It has a wide range of applications, including calculating forces and moments on aircraft, determining the mass flow rate of petroleum through pipelines, predicting weather patterns and more.",
    colorClass: "card-red",
  },
  {
    title: "Multiphase Flow",
    description:
      "Multiphase flow is the simultaneous flow of materials with two or more thermodynamic phases. These phases may consist of one chemical component or several different chemical components. A phase is classified as continuous if it occupies a continually connected region of space. Whereas a classification of disperse is applied when the phase occupies disconnected regions of space. The continuous phase may be either gaseous or a liquid. The disperse phase can consist of either a solid, liquid or gas.",
    colorClass: "card-purple",
  },
  {
    title: "Fuel Technology​",
    description:
      "Nowadays, the world face against growing energy demand of fossil energy resources. Fuel technology is required to overcome the problem. Fuel technology deals with scientific and technological aspect of converting fossil or renewable resources into clean fuels and optimizing its process. Actual research about new kind of fuel resources which developed in industrial and domestic utilization of fuel will be an interesting discussion. Development of manufactured domestic fuels and domestic gas utilization research can be included. Papers on advanced physical conversion processes are also welcome. This matter is recommended for fuel technologists, engineers and scientist concerned in advances in fuel technology.",
    colorClass: "card-orange",
  },
  {
    title: "Thermodynamics & Energy Conversion",
    description:
      "Energy Conversion is a transformation between the one energy into the other energy, which mean the new energy is produced to reduce the consumption of energy by using less of an energy service Energy can be only changed into one transform, for example heat energy into mechanic energy and it doesn’t apply for the opposite That is why the change of the heat energy goes from the higher heat energy into the lower heat energy. The energy conversion makes environment be better, because the energy conversion is referred to the energy eco-sufficiency which mean the Energy conservation reduces the need for energy services and can result in increased environmental quality and higher savings. Energy conversion is made by technology of a machine, it means that we still waste much money and makes more pollution, it is possible to minimize these losses by adopting green engineering practices improving life cycle of the components.",
    colorClass: "card-red",
  },
  {
    title: "Fluid Structure Interaction",
    description:
      "Fluid–structure interaction (FSI) is the interaction of some movable or deformable structure with an internal or surrounding fluid flow, it is also involving interdisciplinary subject of interest to many researchers in the field of fluid dynamics. Fluid–structure interactions can be stable or oscillatory. In oscillatory interactions, the strain induced in the solid structure causes it to move such that the source of strain is reduced, and the structure returns to its former state only for the process to repeat. Flutter/Buffeting/Vibrations are the main applications of fluid structure interaction. As the fluid interacts with a structure, it produces vibrations. If the frequency produced matches the natural frequency of the material, then the structure will see a catastrophic failure. To avoid this, people should design structures keeping Fluid Structure Interaction in mind. For example: Bridge collapse due to wind/cyclone, Sound due to flow over electric cables.",
    colorClass: "card-purple",
  },
  {
    title: "Heat-Mass Transfer & Phase Change",
    description:
      "Heat transfer is the exchange of thermal energy between physical systems. The rate of heat transfer is dependent on the temperatures of the systems and the properties of the intervening medium through which the heat is transferred. The three fundamental modes of heat transfer are conduction, convection and radiation. Mass transfer is the net movement of mass from one location, usually meaning stream, phase, fraction or component, to another. Mass transfer occurs in many processes, such as absorption, evaporation, adsorption, drying, precipitation, membrane filtration, and distillation. Mass transfer is used by different scientific disciplines for different processes and mechanisms. Heat transfer and mass transfer are kinetic processes that may occur and be studied separately or jointly. Studying them apart is simpler, but both processes are modelled by similar mathematical equations in the case of diffusion and convection (there is no mass transfer similarity to heat radiation), and thus more efficient to consider them jointly. Besides, heat and mass transfer must be jointly considered in some cases like evaporation cooling.",
    colorClass: "card-orange",
  },
  {
    title: "Renewable Energy & Energy Harvesting",
    description:
      "Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat. Renewable energy often provides energy in four important areas: electricity generation, air and water heating/cooling, transportation, and rural (off-grid) energy services. Energy harvesting is the process by which energy is derived from external sources, captured, and stored for small, wireless autonomous devices, like those used in wearable electronics and wireless sensor networks. Energy harvesters provide a very small amount of power for low-energy electronics.",
    colorClass: "card-red",
  },
  {
    title: "Combustion & Automotive Engineering",
    description:
      "Combustion harnesses the energy from heating fuel. As global energy need is always increasing, the efficiency of energy conversion needs to be developed, especially at combustion process for a better utilization on the human needs. Automotive is one of the sectors which also correlating with the combustion process development. The combustion, which run by fuel still play an important role in the automotive sector nowadays. Therefore, combustion process matters greatly and have the important topics to be discussed.",
    colorClass: "card-purple",
  },
];

const ConferenceTopics: React.FC = () => {
  const [openCards, setOpenCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    const updated = new Set(openCards);
    if (updated.has(index)) {
      updated.delete(index);
    } else {
      updated.add(index);
    }
    setOpenCards(updated);
  };

  return (
    <section id="conference-topics" className="section bg-topics">
      <h2>Conference Topics</h2>
      <div className="topic-card-stack">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`topic-card ${topic.colorClass} ${
              openCards.has(index) ? "active" : ""
            }`}
            onClick={() => toggleCard(index)}
          >
            <h3>{topic.title}</h3>
            {openCards.has(index) && (
              <p className="description">{topic.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// export default ConferenceTopics;

const RegisterPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="register-page bg-light">
        <div className="container">
          <section className="register section bg-medium" id="how-to-register">
            <div>
              <h2>Register as a Presenter</h2>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScFsBsmx6goKX7-i7NiBiwDpwMnK43SkXva-urAIzza1-hhgw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Conference Registration
              </a>
              <a
                href="https://edas.info/N29581"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Paper Submission
              </a>
            </div>
            <div>
              <img src={edas} alt="edas" />
            </div>
          </section>
          <section id="conference-topics" className="section bg-topics">
            <ConferenceTopics />
          </section>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
