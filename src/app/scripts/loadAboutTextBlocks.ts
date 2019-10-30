import { db } from 'app/state/api/actionsReducers';
import { generateId } from 'app/state/utils/general';

const aboutTextBlocksInit = require('./data/aboutTextBlocks.json');

export function loadAboutTextBlocks() {
  db.insert('aboutTextBlocks')
    .docs(
      aboutTextBlocksInit.map(block => ({
        _id: generateId(),
        title: block.title,
        body: block.body,
        moreLink: block.moreLink,
      }))
    )
    .apply();
}

export function deleteAboutTextBlocks() {
  db.delete('aboutTextBlocks').apply();
}
