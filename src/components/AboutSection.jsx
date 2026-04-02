export default function AboutSection() {
  return (
    <section id="about" className="py-5">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="display-4 gradient-text">About Me</h2>
          <div className="divider mx-auto"></div>
          <p className="lead mt-3">Passionate about building scalable solutions and intelligent systems</p>
        </div>

        <div className="row align-items-center">

          {/* Image Column */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="about-image-container">
              <div className="about-image">
                <div className="image-overlay">
                  <i className="fas fa-code fa-3x"></i>
                </div>
              </div>
              <div className="experience-card">
                <h3>4+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
            <div className="about-content">
              <h3 className="mb-4">Full-Stack Developer & AI Enthusiast</h3>

              <div className="philosophy-quote mb-4">
                <i className="fas fa-quote-left"></i>
                <p className="fst-italic">
                  "I believe in writing code that not only works but tells a story. Every line should be purposeful,
                  every function should be elegant, and every system should be built to scale and adapt."
                </p>
              </div>

              <p className="mb-4">
                With <strong>3+ years in ASP.NET Core</strong> and <strong>1+ year in Python AI & Computer Vision</strong>,
                I specialize in building enterprise-grade applications that solve real-world problems. My journey in software
                development has been driven by a passion for creating efficient, scalable solutions that make a difference.
              </p>

              <div className="expertise-areas mb-4">
                <h4 className="mb-3">Core Expertise</h4>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="expertise-list">
                      <li><i className="fas fa-check-circle"></i> Enterprise ERP Development</li>
                      <li><i className="fas fa-check-circle"></i> Database Design & Optimization</li>
                      <li><i className="fas fa-check-circle"></i> RESTful API Development</li>
                      <li><i className="fas fa-check-circle"></i> Windows Services & Background Jobs</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="expertise-list">
                      <li><i className="fas fa-check-circle"></i> Computer Vision Solutions</li>
                      <li><i className="fas fa-check-circle"></i> Object Detection & Recognition</li>
                      <li><i className="fas fa-check-circle"></i> Face Recognition Systems</li>
                      <li><i className="fas fa-check-circle"></i> ANPR & Vehicle Detection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="approach-section">
                <h4 className="mb-3">My Development Philosophy</h4>
                <div className="approach-cards">
                  <div className="approach-card">
                    <i className="fas fa-lightbulb"></i>
                    <h5>Innovation First</h5>
                    <p>Always looking for creative solutions to complex problems</p>
                  </div>
                  <div className="approach-card">
                    <i className="fas fa-shield-alt"></i>
                    <h5>Security Focused</h5>
                    <p>Building secure, robust systems from the ground up</p>
                  </div>
                  <div className="approach-card">
                    <i className="fas fa-rocket"></i>
                    <h5>Performance Driven</h5>
                    <p>Optimizing for speed, scalability, and efficiency</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
