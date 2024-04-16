document.getElementById("loadData").addEventListener("click", function () {
  console.log("Button clicked");
});

document
  .getElementById("result")
  .addEventListener("htmx:afterRequest", function (event) {
    var response = event.detail.xhr.response;
    var resultElement = document.getElementById("result");
    resultElement.innerHTML =
      "<pre>" + JSON.stringify(response, null, 2) + "</pre>";
  });
