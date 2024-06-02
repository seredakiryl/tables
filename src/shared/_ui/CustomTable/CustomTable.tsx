// 'use client'
// import {
//     makeStyles,
//     StyledEngineProvider,
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
// } from '@mui/material';
// import type {ICustomTable} from './CustomTable.types';
//
//
// function CustomTable<T>({
//                             columnsConfig,
//                             isLoading,
//                             records = [],
//                             onRecordClick,
//                         }: ICustomTable<T>) {
//
//     const clickOnRowHandler = (record: T) => {
//         if (onRecordClick) {
//             onRecordClick(record);
//         }
//     };
//
//     return (
//         <StyledEngineProvider injectFirst>
//                 <TableContainer >
//                     <Table className=" overflow-hidden  text-white ">
//                         <TableHead>
//                             <TableRow >
//                                 {columnsConfig.map((columnConfig) => (
//                                     <TableCell
//                                         className={'text-white'}
//                                         key={columnConfig.label}
//                                     >
//                                         {columnConfig.label}
//                                     </TableCell>
//                                 ))}
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {!isLoading &&
//                                 records?.map((record,key) => {
//                                     return (
//                                         <TableRow
//                                             key={key}
//                                             onClick={() => clickOnRowHandler(record)}
//                                         >
//                                             {columnsConfig.map((columnConfig) => (
//                                                 <TableCell key={columnConfig.label}
//                                                            className={'text-white border-[0px]'}
//                                                 >
//                                                     {columnConfig.renderCell(record) || '-'}
//                                                 </TableCell>
//                                             ))}
//                                         </TableRow>
//                                     );
//                                 })}
//                         </TableBody>
//                     </Table>
//                     {(!records || !records.length) && !isLoading && (
//                         <p className="my-2 text-center">Нет записей в базе данных</p>
//                     )}
//                 </TableContainer>
//
//         </StyledEngineProvider>
//     );
// }
//
// export default CustomTable;
//


'use client'
import type {ICustomTable} from './CustomTable.types';


function CustomTable<T>({
                            columnsConfig,
                            isLoading,
                            records = [],
                            onRecordClick,
                        }: ICustomTable<T>) {

    const clickOnRowHandler = (record: T) => {
        if (onRecordClick) {
            onRecordClick(record);
        }
    };


    return (
        <div>
            <table className="w-full overflow-hidden  text-white ">
                <thead>
                <tr>
                    {columnsConfig.map((columnConfig) => (
                        <th scope="col"
                            className={'text-white  text-left  px-4 uppercase opacity-50 '}
                            key={columnConfig.label}
                        >
                            {columnConfig.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {!isLoading &&
                    records?.map((record, key) => {
                        return (
                            <tr
                                key={key}
                                onClick={() => clickOnRowHandler(record)}
                                className={`${key % 2 !== 0 ? 'bg-pureBaseRow-dark' : ''}`}
                            >
                                {columnsConfig.map((columnConfig) => (
                                    <th key={columnConfig.label}
                                        className={'text-white border-[0px] text-left   px-4 py-2'}
                                    >
                                        {columnConfig.renderCell(record) || '-'}
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {(!records || !records.length) && !isLoading && (
                <p className="my-2 text-center">
                    No entries </p>
            )}
        </div>

    );
}

export default CustomTable;

