import { projects } from '../data/portfolioData';

const aspNetProjects = projects.filter(p => p.projectType === 'ASP.NET');
const pythonProjects = projects.filter(p => p.projectType === 'Python');

function ProjectCard({ project }) {
  const isAI = project.projectType === 'Python';
  const cardClass = project.isHighlighted
    ? isAI ? 'project-card ai-project' : 'project-card premium'
    : isAI ? 'project-card ai-project' : 'project-card';

  const badgeClass = isAI ? 'project-badge ai' : 'project-badge';

  return (
    <div className={cardClass}>
      <div className={badgeClass}>{project.badge}</div>

      {/* Layout: icon on top for ASP.NET, inline header for Python */}
      {!isAI ? (
        <div className="project-icon">
          <i className={`fas ${project.icon} fa-3x`}></i>
        </div>
      ) : (
        <div className="project-header">
          <i className={`fas ${project.icon} fa-2x`}></i>
          <h4>{project.title}</h4>
        </div>
      )}

      <div className="project-content">
        {!isAI && <h4>{project.title}</h4>}
        <p>{project.description}</p>

        {project.features && project.features.length > 0 && (
          <div className="project-features">
            {project.features.map(f => (
              <span className="feature-tag" key={f}>
                <i className="fas fa-check"></i> {f}
              </span>
            ))}
          </div>
        )}

        <div className="tech-stack">
          {project.technologies.map(t => (
            <span className="tech-badge" key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-5 bg-dark-section">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 gradient-text">Featured Projects</h2>
          <div className="divider mx-auto"></div>
          <p className="lead mt-3">Enterprise solutions and AI innovations that make an impact</p>
        </div>

        {/* ASP.NET Projects */}
        <div className="project-category mb-5" data-aos="fade-up">
          <h3 className="category-title mb-4">
            <i className="fab fa-microsoft me-2"></i>Enterprise Solutions (ASP.NET Core)
          </h3>
          <div className="row g-4">
            {aspNetProjects.map((p, i) => (
              <div className="col-lg-4" data-aos="zoom-in" data-aos-delay={i * 100} key={p.id}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Python AI Projects */}
        <div className="project-category" data-aos="fade-up">
          <h3 className="category-title mb-4">
            <i className="fab fa-python me-2"></i>AI & Computer Vision Solutions
          </h3>
          <div className="row g-4">
            {pythonProjects.map((p, i) => (
              <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={i * 100} key={p.id}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
