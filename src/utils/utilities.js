export const searchObjectByName = (objs, name) => {
  return objs.filter((obj) =>
    obj.name.toLowerCase().startsWith(name.toLowerCase())
  );
};
