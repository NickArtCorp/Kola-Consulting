import React, { useEffect, useRef } from 'react';
import '../../Styles/Nav.css';

function Shapes() {
  const pentagonsRef = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Intersecting:', entry.target);
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    pentagonsRef.current.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    textRefs.current.forEach((target) => {
      if (target) {
        observer.observe(target);
      }
    });

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-services">
      {pentagonData.map((pentagon, index) => (
        <div key={index} className="pentagon">
          <div
            ref={(el) => (pentagonsRef.current[index] = el)}
            className={`${pentagon.className} pen`}
          >
            <p className={pentagon.textClassName}>
              {pentagon.text} <br></br>
              <i>{pentagon.subText}</i>
            </p>
          </div>

          <div
            ref={(el) => (textRefs.current[index] = el)}
            className={`${pentagon.textClass} text`}
          >
            <ul>
              {pentagon.listItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

const pentagonData = [
  {
    className: 'first',
    textClassName: 'one',
    text: 'Administration et Secretariat de Projet ',
    subText: 'Project Administration and Secretariat',
    textClass: 'uno',
    listItems: [
      'Mise en place et coordination de projet / Implementation and coordination of projects',
      'Rédaction de cahiers de charges et de contrats avec les prestataires ou partenaires / Drafting specications and contracts with service providers or partner',
      'Evaluation à mi-parcours ou à la fin des prestations / Mid-term evaluation or at the end of the service',
      'Rapports divers / Various reports'
    ],
  },
  {
    className: 'second',
    textClassName: 'two',
    text: 'Représentation /Representation',
    subText: '',
    textClass: 'dos',
    listItems: [
      ' Mandataire pour le suivi de vos activités / Agent for monitoring of your activities',
      ' Délégué pour actions spécifiques / Delegate for specific action',
      ' Hébergement ou gestion de fonds d’appui / Hosting or management of support funds',
    ],
  },
  {
    className: 'third',
    textClassName: 'three',
    text: 'Actions de terrain /Field actions',
    subText: '',
    textClass: 'tres',
    listItems: [
      ' Opérations promotionnelles / Promotional operations',
      'Recommandations / Recommendations',
      'Sondages / Surveys'
      
    ],
  },

  {
    className: 'fourth',
    textClassName: 'four',
    text: 'Audit de demandes de financement ou de sponsoring',
    subText: '/Audit of funding or sponsorship requests',
    textClass: 'quatro',
    listItems: [
      'Evaluation de dossiers de demandes, suivi de commentaires et avis / Evaluation of application les, followed by comments and opinions',
      'Notation des dossiers de demandes ou des projets / Rating of application les or projects'
    ],
  },

  {
    className: 'fifth',
    textClassName: 'five',
    text: 'Régie opérationnelle/Operational management',
    subText: '',
    textClass: 'cintro',
    listItems: [
      'Actions et supervisions logistiques pour événements /Logistical actions and supervision for events',
      'Plani cation d’événements / Event planning',
      'Choix et recrutement des prestataires /Choice and recruitment of service providers',
      'Recrutement et supervision d’équipes opérationnelles /Recruitment and supervision of operational teams'
    ],
  },

  {
    className: 'sixth',
    textClassName: 'six',
    text: 'Montage de projets/ Setting up projects',
    subText: '',
    textClass: 'sieze',
    listItems: [
      'Rédaction des termes de référence / Drafting of terms of reference',
      'Conception et rédaction de projets /Design and writing of projects',
      'Accompagnement sur les réponses d’appels à proposition/projets / Coaching on responses to calls for proposals/projects'
    ],
  },

  {
    className: 'seventh',
    textClassName: 'seven',
    text: 'Lobbying et mise en contact /Lobbying and networking',
    subText: '',
    textClass: 'sept',
    listItems: [
      'Conduite d’actions pour obtenir une décision favorable / Conduct of actions to obtain a favorable decision',
    ],
  },
  // Add other pentagon data objects similarly
];

export default Shapes;