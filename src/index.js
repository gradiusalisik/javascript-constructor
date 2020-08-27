import { model } from "./model";
import { Site } from "./clasess/site";
import { Sidebar } from "./clasess/sidebar";
import "./styles/main.css";

const site = new Site("#site");

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

new Sidebar("#panel", updateCallback);

site.render(model);

// Remind get function and conditions
// const generate = templates[block.type];
// if (generate) {
//   const html = generate(block);
//   site.insertAdjacentHTML("beforeend", html);
// }
