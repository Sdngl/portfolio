import './home.css';

const Home = () => {
  return (
    <main className="home-page">
      {/* Profile Welcome Section */}
      <section className="profile-welcome">
        <div className="profile-circle">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple Logo"
            className="profile-img"
          />
        </div>
        <h1 className="welcome-heading">Welcome to my portfolio</h1>
      </section>

      {/* Rest of your home content */}
    </main>
  );
};

export default Home;
