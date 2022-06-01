import React from "react";

export const DataTableContext = React.createContext({
  CustomToolbar: () => {},
  modal: {
    modalOpen: false,
    setModalOpen: () => {},
  },
  selectedRow: {
    selectedRowData: [],
    setSelectedRowData: () => {},
  },
  setShowEdit: () => {},
});

// export const DataTableProvider = ({ children }) => {
//     return (
//         <DataTableContext.Provider>
//             {children}
//         </DataTableContext.Provider>
//     )
// };
