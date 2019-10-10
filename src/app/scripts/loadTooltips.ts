import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const tooltips = require('./data/tooltips.json');

export function loadTooltips() {
  tooltips.forEach(tooltip => {
    const tooltipDoc = {
      _id: generateId(),
      page: tooltip.page,
      title: tooltip.title,
      purpose: tooltip.purpose,
      whyGB: tooltip.whyGB,
      calculation: tooltip.calculation,
    };

    db.insert('tooltips')
      .doc(tooltipDoc)
      .apply();
  });
}

export function deleteTooltips() {
  db.delete('tooltips').apply();
}

export function insertTooltipsFromFile(data: any, reloadTooltips: Function) {
  db.delete('tooltips')
    .apply()
    .then(() => {
      const rows = data.slice(1, data.length).map(item => ({
        page: item[0],
        title: item[1],
        purpose: item[2],
        whyGB: item[3],
        calculation: item[4],
      }));
      const tooltipsDoc = rows.map(tooltip => ({
        _id: generateId(),
        page: tooltip.page,
        title: tooltip.title,
        purpose: tooltip.purpose,
        whyGB: tooltip.whyGB,
        calculation: tooltip.calculation,
      }));
      db.insert('tooltips')
        .docs(tooltipsDoc)
        .apply()
        .then(() => reloadTooltips());
    });
}
