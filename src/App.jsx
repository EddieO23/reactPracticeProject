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

  let content;
  
  if(projectsState.selectedProjectId === null) {
    content = <NewProject/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={addProjectHandler}/>
  }
  
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddProject={addProjectHandler} />
      {content}
    </main>
  );
}

export default App;
