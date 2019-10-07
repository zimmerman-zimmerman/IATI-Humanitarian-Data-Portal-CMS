import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const tooltips = require('./data/tooltips.json');

export function loadTooltips() {
  tooltips.forEach(tooltip => {
    const tooltipDoc = {
      _id: generateId(),
      page: tooltip.page,
      title: tooltip.title,
      tooltip: tooltip.tooltip,
    };

    db.insert('tooltips')
      .doc(tooltipDoc)
      .apply();
  });
}

export function deleteTooltips() {
  db.delete('tooltips').apply();
}
