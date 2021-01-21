async function getTasklists() {
    await fetch("https://app.paymoapp.com/api/tasklists/", {
      headers: {
        "X-Session": "886e2c2eacfd2ea8e020ecff45fd1b1d",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        tasklists = data;
      });
    return tasklists;
  }