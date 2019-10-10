import { Action, Thunk } from 'easy-peasy';
import { ErrorResponse } from 'app/state/api/interfaces';

export interface Tooltip {
  _id: string;
  page: string;
  title: string;
  purpose: string;
  whyGB: string;
  calculation: string;
}

export interface TooltipsModel {
  allTooltips: Array<Tooltip>;
  error: string | null;
  setError: Action<TooltipsModel, ErrorResponse>;
  setAllTooltips: Action<TooltipsModel, Array<Tooltip>>;
  getAllTooltips: Thunk<TooltipsModel>;
  editTooltip: Thunk<TooltipsModel>;
}
