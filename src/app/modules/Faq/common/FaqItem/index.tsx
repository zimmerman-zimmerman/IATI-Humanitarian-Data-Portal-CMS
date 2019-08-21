import React from 'react';
import { FaqItemModel } from './model';

/* components */
import { ItemHeader } from './common/ItemHeader';
import { OpenedItem } from './common/OpenedItem';

export const FaqItem = (props: FaqItemModel) => {
  const [open, setOpen] = React.useState(props.defOpen);

  return (
    <div>
      <ItemHeader
        open={open}
        title={!open ? props.title : ''}
        onRemove={() => props.removeItem(props.index)}
        setOpen={() => setOpen(!open)}
      />
      {open && (
        <OpenedItem
          editItem={props.editItem}
          index={props.index}
          title={props.title}
          expl={props.expl}
        />
      )}
    </div>
  );
};
