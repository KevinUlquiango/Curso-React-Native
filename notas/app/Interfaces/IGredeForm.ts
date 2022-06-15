export interface IGredeForm {
  name?: string | any;
  label: string;
  placeholder: string;
  funtionality?: Function | any;
  value?: string | number | typeof String[] | any;
  data?: any;
  position?: any;
  messageError: string;
}
