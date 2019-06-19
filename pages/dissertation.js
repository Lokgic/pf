import Project from "../components/Project";
import work from "../static/work.json";

const projectName = "dissertation";

export default () => {
  return <Project projectName={projectName} data={work[projectName]} />;
};
