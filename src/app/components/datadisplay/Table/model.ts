import { MUIDataTableOptions, MUIDataTableColumnDef } from 'mui-datatables';

export type TableModuleModel = {
  title: string;
  data: Array<Array<any>>;
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
};

export type TableLayoutModel = {
  title: string;
  data: Array<Array<any>>;
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
};
