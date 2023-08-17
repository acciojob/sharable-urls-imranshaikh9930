// your code here

  const button = document.getElementById("button");
  const urlOutput = document.getElementById("url");

  button.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    const queryString = `name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
    const url = `https://localhost:8080/?${queryString}`;
    
    urlOutput.textContent = url;
  });
