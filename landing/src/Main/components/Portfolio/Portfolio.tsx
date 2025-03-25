import { getProjects } from "./helpers/prortfolioHelper";
import "./Portfolio.css"

const Portfolio = () => {
  const projects = getProjects();
  return (
    <div id="portfolio" className="section portfolio-section">
      <section className="title">
        <h2>Portfolio</h2>
        <p>
          Here you will find some personal projects.
        </p>
      </section>

      <div className="project-container">
        {
          projects.map(project => (
            <div key={project.title} className="project">
              <img
                src={project.imageUrl}
                alt={project.imageAlt} />

              <article className="information">
                <h3 className="project-title"> {project.title} </h3>
                <p> {project.description} </p>

                <div className="button-group">
                  <a
                    className="button button-primary button-float"
                    href={project.appUrl}>Preview</a>
                  <a
                    className="button button-float"
                    href={project.gitRepoUrl}>Git Repo</a>
                </div>
              </article>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Portfolio;
