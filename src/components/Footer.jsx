export default function Footer() {
  return (
    <footer className="text-center">
      <div className="container">
        <div className="social-links mb-3">
          <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="#" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="#" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a>
        </div>
        <p>&copy; {new Date().getFullYear()} AI Developer Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
