const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const ok = document.getElementById("ok");
const home = document.getElementById("home");

function fetchRemoteApi(directionValue) {
  let url = "http://172.20.10.4:3000/remote/api";
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"direction":"${directionValue}"}`,
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error("error:" + err));
}

leftArrow.onclick = () => {
  fetchRemoteApi("left")
};

rightArrow.onclick = () => {
  fetchRemoteApi("right")
};

ok.onclick = () => {
  fetchRemoteApi("ok")
};

home.onclick = () => {
  fetchRemoteApi("home")
};
