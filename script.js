// Difine vars.
let POST = document.getElementById('POST');
let GET = document.getElementById('GET');
let Link = document.getElementById('linkInput');
let showRes = document.getElementById('respon');
let reqBody = document.getElementById('reqBody');
let ContentType = document.getElementById('content');
let method;

// Functions.
POST.addEventListener('click', async () => {
  method = 'POST';
  if (Link.value == "") {
    alert("The Link you typed is incorrect")
  } else {
  function reqListener() {
  console.log(this.response);
  showRes.innerText = this.response;
}
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);
    req.open("POST", Link.value);
    req.setRequestHeader("Content-Type", 'application/json');
    var data = reqBody.value;
    req.send(data);
  }
});

GET.addEventListener('click', async () => {
  method = 'GET';
  if (Link.value == "") {
    alert("The Link you typed is incorrect")
  } else {
    const response = await fetch(Link.value, {
      method: method,
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const res = await response.json();
    showRes.innerText = JSON.stringify(res);
  }
});