import './About.css';

const About = () => {
  return (
    <div id="about" className="section about-section">
      <section className="title">
        <h2>About Me</h2>
        <p>
          Here you will find more information about me, about my
          background, what I do and my current skills mostly in
          terms of programming and technology
        </p>
      </section>

      <div className="information">
        <article className="history">
          <h3>My short history</h3>

          <p>
            I'm a web developer based in Romania, Targu Mures. <br />
            <br />
            I started my career in 2006, working for big
            corporations. I have experience working in
            multinational environments, and also working in
            team. I gained a lot of expertise in web technology
            domain.<br />
            <br />
            My latest passion is React with Typescript. I love
            doing what I’m good at, what I enjoy, and what
            also helps others.<br />
            <br />
            It’s important to me to be useful to others and to
            have the exact skills needed for the challenges ahead.
            This way, everyone gets what they need: the client
            receives a professional solution, and I gain
            recognition. That makes everyone happy. <br />
            <br />
            If you liked what you read and think I can help,
            don’t hesitate! Hire me for a project! I wish you
            all the best!
          </p>
        </article>

        <article className="skills">
          <h3>My skills</h3>

          <span className="chip">JavaScript</span>
          <span className="chip">TypeScript</span>
          <span className="chip">React</span>
          <span className="chip">NodeJS</span>
          <span className="chip">HTML</span>
          <span className="chip">CSS</span>
          <span className="chip">Kubernetes</span>
          <span className="chip">Docker</span>
        </article>

      </div>

      <a
        href="#contact"
        className="button button-primary button-float"
        tabIndex={-1}>
        Contact
      </a>
    </div >
  );
}

export default About;
