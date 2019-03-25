import sample from "lodash/sample";
import rand from "lodash/random";
import { addDays } from "date-fns";

const colors = [
  "red",
  "blue",
  "yellow",
  "RoyalBlue",
  "Tomato",
  "PapayaWhip",
  "PaleGreen",
  "MediumPurple",
  "Wheat",
  "Violet",
  "SkyBlue"
];

const makeTask = title => ({
  title,
  color: sample(colors),
  createdAt: new Date(),
  dueAt: addDays(new Date(), rand(0, 20))
});

const all = [
  makeTask("Love yourself"),
  makeTask("Kill humans"),
  { ...makeTask("Say sorry"), children: [makeTask("Ser gay")] }
];

export const tasks = [{ title: "Puto", children: all }];
