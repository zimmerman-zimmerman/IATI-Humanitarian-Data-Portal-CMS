import isEqual from 'lodash/isEqual';

export const checkIfChanged = (initBlocksData, editedBlocksData) => {
  const initBlocks = initBlocksData.map(block => ({
    ...block,
    title: block.title.replace(/\s/g, ''),
    body: block.body.replace(/\s/g, ''),
    moreLink: block.moreLink
      ? block.moreLink.replace(/\s/g, '')
      : block.moreLink,
  }));
  const editedBlocks = editedBlocksData.map(block => ({
    ...block,
    title: block.title.replace(/\s/g, ''),
    body: block.body.replace(/\s/g, ''),
    moreLink: block.moreLink
      ? block.moreLink.replace(/\s/g, '')
      : block.moreLink,
  }));
  return !isEqual(initBlocks, editedBlocks);
};
