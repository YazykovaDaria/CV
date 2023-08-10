import { projects } from "./data";
import { getCard } from "./components/card";

export const app = () => {
  const projectContainer = document.getElementById('cards');
  projects.forEach((item) => {
    const projectCard = getCard(item);
    projectContainer.append(projectCard);
  })
}
