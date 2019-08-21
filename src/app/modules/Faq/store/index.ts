import { action, createComponentStore, thunk } from 'easy-peasy';
import { cond } from 'space-api';
import { db } from 'app/state/api/actionsReducers';

/* interfaces */
import { FaqItem, FaqStoreModel, ItemEditPayload } from './interface';
import { ErrorResponse } from 'app/state/api/interfaces';

/* utils */
import find from 'lodash/find';
import isEqual from 'lodash/isEqual';
import { generateId } from 'app/state/utils/general';

const faqs: FaqStoreModel = {
  orgFaqItems: [],
  faqItems: [],
  error: null,
  setError: action((state, payload: ErrorResponse) => {
    state.error = payload.data.error;
  }),
  setAllItems: action((state, payload: Array<FaqItem>) => {
    state.faqItems = payload;
    state.orgFaqItems = payload;
  }),
  getAllItems: thunk(async actions => {
    const res = await db.get('faq_items').apply();
    if (res.status === 200) {
      actions.setAllItems(res.data.result);
    } else {
      actions.setError(res);
    }
  }),
  addItem: action(state => {
    // state.faqItems = state.faqItems.push(payload);
    state.faqItems.push({ title: '', expl: '' });
  }),
  removeItem: action((state, index) => {
    state.faqItems.splice(index, 1);
  }),
  editItem: action((state, payload: ItemEditPayload) => {
    const { index, ...changedValues } = payload;
    state.faqItems[payload.index] = {
      ...state.faqItems[payload.index],
      ...changedValues,
    };
  }),
  discardChanges: action(state => {
    state.faqItems = state.orgFaqItems;
  }),
  saveChanges: thunk(async (actions, payload, { getState }) => {
    const faqItems = getState().faqItems;
    const orgFaqItems = getState().orgFaqItems;

    // variable to store update/create item async calls
    const updateCreateAsync: any[] = [];

    // so here we update items or insert new items
    // according to the faqItems array
    // which is our main editing/work variable
    faqItems.forEach(item => {
      const { _id, ...itemValues } = item;
      if (_id) {
        const orgItem = find(orgFaqItems, ['_id', _id]);

        if (orgItem) {
          if (!isEqual(orgItem, item)) {
            updateCreateAsync.push(
              db
                .update('faq_items')
                .where(cond('_id', '==', item._id))
                .set({ ...itemValues })
                .apply()
            );
          }
        } else {
          updateCreateAsync.push(
            db
              .insert('faq_items')
              .doc({ _id: generateId(), ...itemValues })
              .apply()
          );
        }
      } else {
        updateCreateAsync.push(
          db
            .insert('faq_items')
            .doc({ _id: generateId(), ...itemValues })
            .apply()
        );
      }
    });

    // and here we await for the update/create functions to finish
    await Promise.all(updateCreateAsync);

    // variable to store delete item async calls
    const delAsync: any[] = [];
    // and here we remove items according to the original
    // loaded up items in comparison to the edited ones
    orgFaqItems.forEach(item => {
      if (!find(faqItems, ['_id', item._id])) {
        delAsync.push(
          db
            .deleteOne('faq_items')
            .where(cond('_id', '==', item._id))
            .apply()
        );
      }
    });

    // and here we await for the delete functions to finish
    await Promise.all(delAsync);

    actions.getAllItems();
  }),
};

export const faqStore = createComponentStore(faqs);
