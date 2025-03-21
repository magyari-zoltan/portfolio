import './Home.css'

const Home = () => {
  return (
    <div id="home" className="section">
      <img
        src="/images/profile.jpg"
        alt="profile picture"
        className="rounded-profile-picture" />

      <div className="introduction">
        <article className="title">
          <h2>Hi, I'm Zoltán</h2>
          <p>
            I'm a web developer creating responsive websites.
            I value simple content structure, clean design,
            and thoughtful interactions, that achieves your
            business goals.
          </p>
        </article>

        <a
          href="#portfolio"
          className="button button-float button-primary"
          tabIndex={-1}>
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Home;
