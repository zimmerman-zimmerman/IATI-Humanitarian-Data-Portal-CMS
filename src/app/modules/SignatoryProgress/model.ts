import { InputsCardModel } from 'app/components/InputsCard/model';
import { SignatoryProgress } from './store/interface';

export type SignatoryProgressModel = {
  edit: boolean;
  signatoryProgressDetail: InputsCardModel;
  addSignatoryProgress: Function;
  updateSignatoryProgress: Function;
  discardChanges: Function;
  deleteSignatoryProgress: Function;
  signatoryProgressItem: SignatoryProgress;
  existingSignatoryProgressItem: SignatoryProgress | null;
};
