async function getTasks() {
    await fetch("https://app.paymoapp.com/api/tasks/", {
      headers: {
        "X-Session": "886e2c2eacfd2ea8e020ecff45fd1b1d",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        tasks = data;
      });
    return tasks;
  }