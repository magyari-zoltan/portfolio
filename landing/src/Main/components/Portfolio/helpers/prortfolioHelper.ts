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
      imageUrl: "/images/project-1.jpg",
      imageAlt: "First portfolio project",
      title: "First Project",
      description: "Adipisicing adipisicing molestiae omnis perferendis dignissimos, tenetur doloremque Eius laborum et sequi modi laborum? Harum quo modi ducimus quos aut",
      gitRepoUrl: "#",
      appUrl: "#",
    }, {
      imageUrl: "/images/project-2.jpg",
      imageAlt: "Second portfolio project",
      title: "Second Project",
      description: "Elit nihil autem fugit distinctio repellat ipsum Asperiores voluptate nihil numquam reprehenderit illo accusamus! Ducimus debitis dicta hic quibusdam expedita.",
      gitRepoUrl: "#",
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
