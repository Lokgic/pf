import Project from "../components/Project";
import data from "../static/about.json";

const projectName = "about";

export default () => {
  return <Project projectName={projectName} data={data} />;
};
