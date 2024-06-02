type TableActionButton<T> = {
  actionType: 'create' | 'update' | 'delete'
  className?:string
  widthIcon?:string
  heightIcon?:string
  record: T;
  clickHandler: (record: T) => void;
};
