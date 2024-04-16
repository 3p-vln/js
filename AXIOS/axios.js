const url = "https://jsonplaceholder.typicode.com/posts";

axios
  .get(url)
  .then((response) => {
    const resultElement = document.getElementById("result__get");
    resultElement.innerText = JSON.stringify(response.data[2]);
  })
  .catch((error) => {
    console.error("Ошибка при выполнении GET запроса:", error);
  });

const data = {
  title: "foo",
  body: "bar",
  userId: 1,
};

axios
  .post(url, data)
  .then((response) => {
    const resultElement = document.getElementById("result__post");
    resultElement.innerText = JSON.stringify(response.data);
  })
  .catch((error) => {
    console.error("Ошибка при выполнении POST запроса:", error);
  });
