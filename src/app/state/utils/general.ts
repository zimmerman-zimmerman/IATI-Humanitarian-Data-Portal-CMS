import { db } from 'app/state/api/actionsReducers';

// so apperantly you need this helper function to generate ids for most of
// your custom models to be able to edit, delete and etc. by those ids
// because idk, why space cloud hasn't made just simple id query checkups

export const generateId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getDBTableData = async (
  tableName,
  setDataAction,
  setErrorAction
) => {
  const res = await db.get(tableName).apply();
  if (res.status === 200) {
    setDataAction(res.data.result);
  } else {
    setErrorAction(res);
  }
};
