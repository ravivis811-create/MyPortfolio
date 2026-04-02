import { skills } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-5">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 gradient-text">Technical Expertise</h2>
          <div className="divider mx-auto"></div>
          <p className="lead mt-3">Mastery in modern technologies and frameworks</p>
        </div>

        <div className="skills-container">

          {/* Core Skills Grid */}
          <div className="core-skills mb-5" data-aos="fade-up">
            <h3 className="text-center mb-4 text-cyan">Core Competencies</h3>
            <div className="skills-grid">
              {skills.coreSkills.map(skill => (
                <div className={`skill-card ${skill.category.toLowerCase()}`} key={skill.name}>
                  <div className="skill-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <h4>{skill.name}</h4>
                  <div className="skill-level">{skill.category}</div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="tech-stack-section" data-aos="fade-up">
            <h3 className="text-center mb-4 text-cyan">Technology Stack</h3>
            <div className="tech-categories">
              {skills.techCategories.map(cat => (
                <div className="tech-category-card" key={cat.title}>
                  <h5 className="category-header">{cat.title}</h5>
                  <div className="tech-items">
                    {cat.items.map(item => (
                      <span className="tech-item" key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
