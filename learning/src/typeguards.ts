type myFunc = (name: string) => void;
type arguements = string | number;
const func: myFunc = (name: arguements) => {
  if (typeof name === "string") {
    console.log("string:", name);
  }
};
interface animal {
  type: "horse";
  name: string;
}

function hey(ani: animal) {
  switch (ani.type) {
    case "horse":
      console.log("horse");
      break;
    default:
      console.log("default case");
  }
}

interface Error {
  [prop: string]: string;
}

const error: Error = {
  name: "",
  message: ""
};
