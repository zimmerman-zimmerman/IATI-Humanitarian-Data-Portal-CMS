// so apperantly you need this helper function to generate ids for most of
// your custom models to be able to edit, delete and etc. by those ids
// because idk, why space cloud hasn't made just simple id query checkups
export const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
