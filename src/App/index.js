export { default } from "./App";

async function main() {
    let projects;
    let tasklists;
    let tasks;
  
    await getProject().then((res) => {
      projects = res.projects;
    });
  
    await getTasklists().then((res) => {
      tasklists = res.tasklists;
    });
  
    await getTasks().then((res) => {
      tasks = res.tasks;
    });
  
    var list = {};
  
    projects.forEach((element) => {
      element.tasklists = {};
      let shortList = { name: element.name, tasklists: {} };
      list[element.id] = shortList;
    });
  
    tasklists.forEach((element) => {
      element.tasks = {};
      let shortList = { name: element.name, tasks: {} };
      list[element.project_id].tasklists[element.id] = shortList;
    });
  
    tasks.forEach((element) => {
      list[element.project_id].tasklists[element.tasklist_id].tasks[element.id] =
        element.name;
    });
  
    console.log(list);
  }
  
  main();