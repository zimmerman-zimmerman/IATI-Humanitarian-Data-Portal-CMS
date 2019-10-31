import { InputsCardModel } from 'app/components/InputsCard/model';
import { Signatory } from './store/interface';

export type SignatoryModel = {
  edit: boolean;
  financial: InputsCardModel;
  descriptive: InputsCardModel;
  signatory: InputsCardModel;
  addSignatory: Function;
  updateSignatory: Function;
  discardChanges: Function;
  deleteSignatory: Function;
  signitem: Signatory;
  orgSignitem: Signatory | null;
};
