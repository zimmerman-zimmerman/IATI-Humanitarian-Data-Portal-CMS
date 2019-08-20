import { TableLayoutModel } from 'app/components/datadisplay/Table/model';

export type SignatoriesLayoutModel = {
  tableData: TableLayoutModel;
  handleAddNewSignatory(): void;
};
