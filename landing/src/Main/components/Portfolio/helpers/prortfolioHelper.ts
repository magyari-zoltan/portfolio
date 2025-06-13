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
      imageUrl: "/images/project-3-photography.jpg",
      imageAlt: "Landing page of the 'My Photography' portfolio",
      title: "My Photography",
      description: "It's a portfolio sharing platform for photographers. Written in React, Typescript, CSS. It subscription based. Multiple users can register and upload their own portfolio photos. Albums can be created to categorize the genre the phographer intends to make photos. The photos within each album can be viewed via an images slide show.",
      gitRepoUrl: "https://github.com/magyari-zoltan/portfolio/tree/master/photography",
      appUrl: "photography",
    }, {
      imageUrl: "/images/project-2-react.jpg",
      imageAlt: "Main page of the Portfolio React",
      title: "Portfolio Landing Page (React)",
      description: "React version of my portfolio landing page. The page was created using vanilla React components styled with CSS and TypeScript. It is deployed using docker-compose using a centra docker-compose.yaml in order to deploy at once all the portfolio projects with a singele command.",
      gitRepoUrl: "https://github.com/magyari-zoltan/portfolio/tree/master/landing",
      appUrl: "#",
    }, {
      imageUrl: "/images/project-1-html.jpg",
      imageAlt: "Main page of the Portfolion HTML",
      title: "Portfolio Landing Page (HTML)",
      description: "HTML verion of the portofio landing page. The purpose of this repo is to demonstrate my HTML, CSS, and JavaScript skill.",
      gitRepoUrl: "https://github.com/magyari-zoltan/portfolio-html",
      appUrl: "https://magyari-zoltan.github.io/portfolio-html",
    },
  ] as Project[];
}
