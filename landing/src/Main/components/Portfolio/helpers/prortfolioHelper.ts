type Project = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  gitRepoUrl: string;
  appUrl: string;
};

export function getProjects(): Project[] {
  return [
    {
      imageUrl: "/images/portfolio-html.jpg",
      imageAlt: "Main page of the Portfolion HTML",
      title: "Portfolio (HTML)",
      description: "HTML verion of the portofio landing page. The purpose of this repo is to demonstrate my HTML, CSS, and JavaScript skill.",
      gitRepoUrl: "https://github.com/magyari-zoltan/portfolio-html",
      appUrl: "https://magyari-zoltan.github.io/portfolio-html",
    }, {
      imageUrl: "/images/portfolio.jpg",
      imageAlt: "Main page of the Portfolio React",
      title: "Portfolio (React)",
      description: "React version of my portfolio landing page. The page was created using vanilla React components styled with CSS and TypeScript. It is deployed using docker-compose using a centra docker-compose.yaml in order to deploy at once all the portfolio projects with a singele command.",
      gitRepoUrl: "https://github.com/magyari-zoltan/portfolio",
      appUrl: "#",
    }, {
      imageUrl: "/images/project-3.jpg",
      imageAlt: "Third portfolio project",
      title: "Third Project",
      description: "Consectetur nesciunt vero commodi necessitatibus minus ut ad Eius explicabo inventore eos atque quia! Tempora dignissimos sed repudiandae fugit ex.",
      gitRepoUrl: "#",
      appUrl: "#",
    }
  ] as Project[];
}
