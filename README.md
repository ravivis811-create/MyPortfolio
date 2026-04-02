# Portfolio React App

Converted from ASP.NET Core MVC to React.

## Project Structure

```
portfolio-react/
├── public/
│   └── index.html          ← CDN links (Bootstrap, FontAwesome, AOS, Google Fonts)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           ← Fixed navbar with scroll + active section detection
│   │   ├── Loader.jsx           ← Full-screen loading spinner
│   │   ├── BackgroundAnimation.jsx  ← Neural network canvas + floating particles
│   │   ├── HeroSection.jsx      ← Typed animation, stat counter, code window
│   │   ├── AboutSection.jsx     ← About me, expertise, philosophy cards
│   │   ├── ProjectsSection.jsx  ← ASP.NET + Python AI project cards
│   │   ├── SkillsSection.jsx    ← Skill cards + tech stack grid
│   │   ├── ExperienceSection.jsx ← Timeline layout
│   │   ├── ContactSection.jsx   ← Contact info + validated form
│   │   └── Footer.jsx           ← Footer with social links
│   ├── data/
│   │   └── portfolioData.js     ← All portfolio data (replaces HomeController.cs data methods)
│   ├── App.jsx                  ← Root component
│   ├── index.js                 ← Entry point
│   └── index.css                ← All styles (site.css + _Layout styles + portfolio.css)
└── package.json
```

## ASP.NET → React Mapping

| ASP.NET                    | React                           |
|----------------------------|---------------------------------|
| `_Layout.cshtml`           | `App.jsx` + `Navbar.jsx` + `Footer.jsx` + `BackgroundAnimation.jsx` |
| `Index.cshtml`             | `HeroSection.jsx`, `AboutSection.jsx`, `ProjectsSection.jsx`, `SkillsSection.jsx`, `ExperienceSection.jsx`, `ContactSection.jsx` |
| `HomeController.cs` data   | `src/data/portfolioData.js`     |
| `portfolio.css` + `site.css` | `src/index.css`               |
| `portfolio.js`             | Inline hooks in components      |
| `ContactModel.cs` validation | `ContactSection.jsx` validate() |

## Setup & Run

```bash
npm install
npm start
```

App runs at http://localhost:3000

## Build for Production

```bash
npm run build
```

## Customization

- **Your info**: Edit `src/data/portfolioData.js` — projects, skills, experience
- **Contact details**: Edit email/phone in `ContactSection.jsx`
- **Social links**: Update href values in `ContactSection.jsx` and `Footer.jsx`
- **Name in navbar**: Edit `Navbar.jsx` brand text
- **Resume download**: Place your PDF at `public/documents/resume.pdf`
- **Colors/theme**: All CSS variables are in `src/index.css` under `:root`

## Notes

- AOS, Bootstrap, Font Awesome loaded via CDN in `public/index.html`
- No extra npm packages needed (Typed.js replaced with a custom React hook)
- Form submission is frontend-only — wire up your backend API in `ContactSection.jsx` handleSubmit()
