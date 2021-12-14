function visitorCounter(){
  fetch("https://ubzbmt8h6c.execute-api.us-east-2.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-counter").innerHTML=body
    })
}
