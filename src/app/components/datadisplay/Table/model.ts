import { MUIDataTableOptions, MUIDataTableColumnDef } from 'mui-datatables';

export type TableModuleModel = {
  title: string;
  data: any[][];
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
};

export type TableLayoutModel = {
  title: string;
  data: any[][];
  columns: MUIDataTableColumnDef[];
  options: MUIDataTableOptions;
};
