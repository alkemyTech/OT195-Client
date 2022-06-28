import React from "react";

export const DataTableContext = React.createContext({
  CustomToolbar: "",
  modal: {
    modalOpen: false,
    setModalOpen: () => {},
  },
  selectedRow: {
    selectedRowData: [],
    setSelectedRowData: () => {},
  },
  actions: {
    showAdd: false,
    showEdit: false,
    goToDetails: () => {},
    setShowEdit: () => {},
    deleteRow: () => {},
  },
});

// export const DataTableProvider = ({ children }) => {
//     return (
//         <DataTableContext.Provider>
//             {children}
//         </DataTableContext.Provider>
//     )
// };
