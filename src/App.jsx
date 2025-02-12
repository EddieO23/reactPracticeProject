import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import { useState } from 'react';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function addProjectHandler() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

function cancelProjectHandler() {
  setProjectsState((prevState) => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    };
  });
}

  function newProjectHandler(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // console.log(projectsState)

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={newProjectHandler} onCancel={cancelProjectHandler} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={addProjectHandler} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        projects={projectsState.projects}
        onStartAddProject={addProjectHandler}
      />
      {content}
    </main>
  );
}

export default App;
