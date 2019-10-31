import React, { useEffect } from 'react';
import { FaqLayout } from './layout';
import { faqStore } from './store';

export function Faq() {
  const [state, actions] = faqStore();

  // this loads on component did mount
  useEffect(() => {
    actions.getAllItems();
  }, []);

  return (
    <FaqLayout
      editItem={actions.editItem}
      faqItems={state.faqItems}
      orgFaqItems={state.orgFaqItems}
      saveChanges={actions.saveChanges}
      discardChanges={actions.discardChanges}
      addItem={actions.addItem}
      removeItem={actions.removeItem}
    />
  );
}
