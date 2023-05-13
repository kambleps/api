function FetchApiData(ApiURL, timeDelay, type = "posts") {
    return new Promise((resolve) => {
      setTimeout(() => {
        fetch(ApiURL)
          .then((responseHere) => responseHere.json())
          .then((HereData) => {
            const tablePostsTbody = document.getElementById("table-posts-tbody");
            const tableProjTbody = document.getElementById("add-projects");
            const tableTodosTbody = document.getElementById("table-tbody");
            const tablePosts = document.getElementById("table-posts");
            const tableProducts = document.getElementById("table-projects");
            const tableTodos = document.getElementById("table-todos");
            if (type == "posts") {
              tablePosts.style.display = "block";
              HereData.posts.forEach((data) => {
                const postsData = `
                        <tr>
                            <td>${data.id}</td>
                            <td>${data.title}</td>
                            <td>${data.body}</td>
                            <td>${data.tags[0]}</td>
                            <td>${data.tags[1]}</td>
                            <td>${data.tags[2]}</td>                    
                        </tr>`;
                tablePostsTbody.innerHTML += postsData;
              });
            } else if (type == "products") {
              tableProducts.style.display = "block";
              HereData.products.forEach((data) => {
                const ProjectData = `
                        <tr>
                            <td>${data.id}</td>
                            <td>${data.title}</td>
                            <td>${data.description}</td>
                            <td>${data.price}</td>
                            <td>${data.discountPercentage}</td>
                            <td>${data.rating}</td>
                            <td>${data.stock}</td>
                            <td>${data.brand}</td>
                            <td>${data.category}</td>
                            <td>${data.thumbnail}</td>
                            <td>${data.images[0]}</td>
                            <td>${data.images[1]}</td>
                            <td>${data.images[2]}</td>
                            <td>${data.images[3]}</td>
                            <td>${data.images[4]}</td>
                        </tr>`;
                tableProjTbody.innerHTML += ProjectData;
              });
            } else if (type == "todos") {
              tableTodos.style.display = "block";
              HereData.todos.forEach((data) => {
                const todosData = `
                        <tr>
                            <td>${data.id}</td>
                            <td>${data.todo}</td>
                            <td>${data.todo}</td>
                            <td>${data.completed}</td>
                            <td>${data.userId}</td>
                        </tr>`;
                tableTodosTbody.innerHTML += todosData;
              });
            }
            resolve(true);
          });
      }, timeDelay);
    });
  }
  function apiCall() {
    Promise.resolve()
      .then(() => FetchApiData("https://dummyjson.com/posts", 1000, "posts"))
      .then((resolve) => {
        if (resolve) {
          return FetchApiData("https://dummyjson.com/products", 2000, "products");
        }
      })
      .then((resolve) => {
        if (resolve) {
          return FetchApiData("https://dummyjson.com/todos", 3000, "todos");
        }
      })
      .catch((err) => console.error(err));
  }
  const buttonApi = document.getElementById("data-api");
  buttonApi.addEventListener("click", apiCall);