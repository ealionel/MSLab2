const boundSize = 16;
const boundaries = {
  x: -boundSize / 2,
  z: -20 - boundSize / 2,
};

function loadModel() {
  const scene = document.querySelector("a-scene");

  const modelCheck = document.querySelector("#loadedModel");

  if (modelCheck) {
    console.log("Model has already been loaded");
    return;
  }

  const model = document.createElement("a-pointcloud");

  model.setAttribute("scale", "0.1 0.1 0.1");
  model.setAttribute("position", "0 0.08 -16");
  model.setAttribute("src", "url(sculpt.ply)");
  model.setAttribute("rotation", "-90 45 0");
  model.setAttribute("size", "0.01");
  model.setAttribute("id", "loadedModel");

  scene.appendChild(model);
}

function sliderXhandler(event, percent) {
  const model = document.querySelector("#loadedModel");

  if (model) move(model, "x", percent);
}

function sliderZhandler(event, percent) {
  const model = document.querySelector("#loadedModel");

  if (model) move(model, "z", percent);
}

function sliderScaleHandler(event, percent) {
  const model = document.querySelector("#loadedModel");

  if (model) scale(model, percent);
}

function scale(model, percent) {
  const newSize = 0.1 + 0.1 * (percent - 0.5);

  const newScale = {
    x: newSize,
    y: newSize,
    z: newSize,
  };
  console.log("newsize", newScale);

  model.setAttribute("scale", newScale);
}

function move(element, direction, percent) {
  const position = element.getAttribute("position");

  const newPosition = { ...position };

  newPosition[direction] = boundaries[direction] + boundSize * percent;

  element.setAttribute("position", newPosition);

  console.log("pos:", newPosition);
}

function testInputAction() {
  console.log("input action");
}

function slideActionFunction(par) {
  console.log("slider blabla", par);
}
