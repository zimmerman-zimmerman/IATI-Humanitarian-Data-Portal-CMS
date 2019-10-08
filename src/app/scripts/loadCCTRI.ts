import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const cctriInit = require('./data/cctri.json');

export function loadCCTRI() {
  const tooltipDoc = {
    _id: generateId(),
    title: cctriInit.title,
    summary: cctriInit.summary,
    body: cctriInit.body,
  };

  db.insert('cctri')
    .doc(tooltipDoc)
    .apply();
}

export function deleteCCTRI() {
  db.delete('cctri').apply();
}
