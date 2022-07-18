"use strict";

let linkName;
let url;
let type;
// console.log(`name: ${linkName}  url: ${url}  type: ${type}`);

const getInput = function () {
  linkName = document.querySelector(".name").value;
  url = document.querySelector(".url").value;
  type = document.querySelector(".type").value;
  // console.log(linkName + "  " + url + "  " + type);
  switch (type) {
    case "MATERIAL":
      type = ".materialDiv";
      break;
    case "TOOL":
      type = ".toolDiv";
      break;
    case "WORK":
      type = ".workDiv";
      break;
    case "OTHER":
      type = ".otherDiv";
      break;
  }
  // console.log(linkName + "  " + url + "  " + type);
  createLink(String(linkName), String(url), String(type));
};

const createLink = function (linkName, url, type) {
  const newLink = document.createElement("a");
  newLink.href = url;
  newLink.classList.add("linkElement");
  newLink.name = type;
  const newContent = document.createTextNode(linkName);
  newLink.appendChild(newContent);

  const targetList = document.querySelector(`${type}`);
  targetList.appendChild(newLink);

  const newBtn = document.createElement("button");
  newBtn.classList.add("deleteBtn");
  newBtn.value = linkName;
  targetList.appendChild(newBtn);
  addEL();
};

const deleteLink = function () {
  let parent = document.querySelector(`${this.name}`);
  let child = document.querySelector("");
  console.log(this.value);
  document.documentElement("button");
};

const addEL = function () {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", deleteLink);
  });
};

document.querySelector(".storeBtn").addEventListener("click", getInput);
// createLink("Woogle", "http://google.com");
