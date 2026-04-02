import { useEffect, useRef, useState } from 'react';

// Typed.js simulation using a custom hook
function useTyped(elementRef) {
  useEffect(() => {
    const strings = [
      'Building Enterprise ERP Solutions',
      'Creating AI-Powered Applications',
      'Specializing in Computer Vision',
      'Developing with ASP.NET Core MVC',
      'Implementing Database Solutions',
      'Crafting RESTful APIs',
    ];

    let currentString = 0;
    let currentChar = 0;
    let deleting = false;
    let timer;

    const el = elementRef.current;
    if (!el) return;

    const type = () => {
      const str = strings[currentString];
      if (!deleting) {
        el.textContent = str.slice(0, currentChar + 1);
        currentChar++;
        if (currentChar === str.length) {
          deleting = true;
          timer = setTimeout(type, 2000);
          return;
        }
      } else {
        el.textContent = str.slice(0, currentChar - 1);
        currentChar--;
        if (currentChar === 0) {
          deleting = false;
          currentString = (currentString + 1) % strings.length;
        }
      }
      timer = setTimeout(type, deleting ? 30 : 50);
    };

    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, [elementRef]);
}

function AnimatedStat({ target, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          let c = 0;
          const increment = target / 50;
          const timer = setInterval(() => {
            c += increment;
            if (c >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(c));
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="stat-item" ref={ref}>
      <h3 className="stat-number">{count}</h3>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const typedRef = useRef(null);
  useTyped(typedRef);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100 pt-5">

          {/* Left Column */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="hero-content">
              <h5 className="welcome-text mb-3">
                <span className="hello-badge">Hello!</span>
                <span className="status-badge ms-2">
                  <span className="status-dot"></span>
                  Available for Projects
                </span>
              </h5>

              <h1 className="display-2 fw-bold mb-4">
                I'm a <span className="gradient-text">Software Engineer</span>
              </h1>

              <h2 className="h3 mb-4 subtitle">
                <span ref={typedRef}></span>
                <span style={{ borderRight: '2px solid var(--primary-color)', animation: 'blink 1s infinite', marginLeft: 2 }}>&nbsp;</span>
              </h2>

              <div className="hero-description mb-4">
                <p className="lead">
                  <strong>4+ years</strong> of experience crafting enterprise solutions with{' '}
                  <strong>ASP.NET Core</strong> and building intelligent systems with{' '}
                  <strong>Python AI & Computer Vision</strong>.
                </p>
                <div className="experience-badges mt-3">
                  <span className="exp-badge">
                    <i className="fas fa-code"></i> 3+ Years ASP.NET Core
                  </span>
                  <span className="exp-badge">
                    <i className="fas fa-brain"></i> 1+ Year AI/ML
                  </span>
                  <span className="exp-badge">
                    <i className="fas fa-database"></i> 4+ Years SQL Server
                  </span>
                </div>
              </div>

              <div className="hero-stats mb-4">
                <AnimatedStat target={8} label="Major Projects" />
                <AnimatedStat target={4} label="Years Experience" />
                <AnimatedStat target={15} label="Technologies" />
              </div>

              <div className="d-flex gap-3 flex-wrap">
                <a href="#contact" className="btn btn-gradient btn-lg" onClick={e => scrollTo(e, 'contact')}>
                  <i className="fas fa-envelope me-2"></i>Get In Touch
                </a>
                <a href="#projects" className="btn btn-outline-cyan btn-lg" onClick={e => scrollTo(e, 'projects')}>
                  <i className="fas fa-folder-open me-2"></i>View Projects
                </a>
                <a href="/documents/resume.pdf" className="btn btn-outline-light btn-lg" download>
                  <i className="fas fa-download me-2"></i>Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Code Window */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="hero-image" style={{ position: 'relative' }}>
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <span className="window-title">Profile.cs</span>
                </div>
                <div className="code-content">
                  <pre><code>
<span className="keyword">public class</span> <span className="class-name">SoftwareEngineer</span> : <span className="class-name">IDeveloper</span>{'\n'}
{'{'}{'\n'}
{'  '}<span className="keyword">private readonly string</span> _name = <span className="string">"Your Name"</span>;{'\n'}
{'  '}<span className="keyword">private readonly string[]</span> _expertise ={'\n'}
{'  '}{'{'}{'\n'}
{'    '}<span className="string">"ASP.NET Core MVC"</span>,{'\n'}
{'    '}<span className="string">"Python AI & Computer Vision"</span>,{'\n'}
{'    '}<span className="string">"SQL Server & ADO.NET"</span>,{'\n'}
{'    '}<span className="string">"Enterprise ERP Solutions"</span>{'\n'}
{'  '}{'}'};{'\n\n'}
{'  '}<span className="keyword">public async Task</span>&lt;<span className="class-name">Solution</span>&gt; <span className="function">BuildAmazingProducts</span>(){'\n'}
{'  '}{'{'}{'\n'}
{'    '}<span className="keyword">return await</span> CreateInnovativeSolutions();{'\n'}
{'  '}{'}'}{'\n'}
{'}'}
                  </code></pre>
                </div>
              </div>

              <div className="floating-icons">
                <div className="float-icon"><i className="fab fa-microsoft"></i></div>
                <div className="float-icon"><i className="fab fa-python"></i></div>
                <div className="float-icon"><i className="fas fa-database"></i></div>
                <div className="float-icon"><i className="fas fa-brain"></i></div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="hero-gradient-overlay"></div>
    </section>
  );
}
