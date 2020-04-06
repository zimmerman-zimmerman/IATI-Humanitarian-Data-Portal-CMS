import { TableLayoutModel } from 'app/components/datadisplay/Table/model';

export type SignatoryProgressListLayoutModel = {
  tableData: TableLayoutModel;
  handleAddNewSignatory(): void;
};
