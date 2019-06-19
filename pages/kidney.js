import Project from "../components/Project";
import work from "../static/work.json";

const projectName = "kidney";

export default () => {
  return <Project projectName={projectName} data={work[projectName]} />;
};
