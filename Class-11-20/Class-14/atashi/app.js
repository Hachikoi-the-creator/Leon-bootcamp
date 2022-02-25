const hiddeMeBtn = document.getElementById("hidde-me");
const hiddeMeTooBtn = document.getElementById("hidde-me-too");
const onlyMeBtn = document.getElementById("only-me");

const cuteImg = document.getElementById("cute-img");
const karinaImg = document.getElementById("karina-png");
const wuckyImg = document.getElementById("wucky-meme");

// hidde cute
hiddeMeBtn.addEventListener("click", () => {
  cuteImg.classList.add("hidde");
});

// toggle wucky
hiddeMeTooBtn.addEventListener("click", () => {
  wuckyImg.classList.toggle("hidde");
});

// toggle only show Karina
onlyMeBtn.addEventListener("click", () => {
  const karinaBool = karinaImg.classList.contains("hidde");

  karinaImg.classList.toggle("hidde");
  // will be invisible, thus show the others
  if (karinaBool) {
    cuteImg.classList.add("hidde");
    wuckyImg.classList.add("hidde");
  }
  // will be visible, remove the others
  else {
    cuteImg.classList.remove("hidde");
    wuckyImg.classList.remove("hidde");
  }
});
