import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-5 bg-dark-section">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 gradient-text">Professional Journey</h2>
          <div className="divider mx-auto"></div>
          <p className="lead mt-3">Building innovative solutions across different domains</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experience.map(exp => (
            <div
              key={exp.id}
              className={`timeline-item ${exp.side}`}
              data-aos={exp.side === 'left' ? 'fade-right' : 'fade-left'}
            >
              <div className="timeline-content">
                <div className="timeline-date">{exp.duration}</div>
                <h4>{exp.title}</h4>
                <h5 className="company">{exp.company}</h5>
                <p>{exp.description}</p>

                <ul className="achievements">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>

                <div className="tech-used">
                  {exp.technologies.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
