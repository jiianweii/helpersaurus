export const generateId = () => {
  return crypto.randomUUID();
};

export const isValidJsObj = (obj: string) => {
  let parsedObject;
  try {
    parsedObject = new Function("return " + obj)();
    if (typeof parsedObject != "object") return "";
    return JSON.stringify(parsedObject);
  } catch (err) {
    return "";
  }
};
