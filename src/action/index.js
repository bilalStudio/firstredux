export const removeItem = (item) => ({
  type: "removeItem",
  item,
  // payload:true
});

export const removedoneItem = (items) => ({
  type: "removedoneItem",
  items,
  // payload:true
});
export const addListdone = (doneText) => ({
  type: "addListdone",
  doneText
 
  // payload:true
});

export const addList = (text) => ({
  type: "addList",
  text,

  // payload:true
});
export const removeList = {
  type: "removeList",
  // payload:true
};
