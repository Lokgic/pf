import Project from "../components/Project";
import work from "../static/work.json";

const projectName = "moralai";

export default () => {
  return <Project projectName={projectName} data={work[projectName]} />;
};
