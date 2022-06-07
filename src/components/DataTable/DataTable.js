import React, { forwardRef, useContext, useEffect, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import { DataTableContext } from "../../contexts/DataTableContext";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const DataTable = (props) => {
  const {
    columns: colDefs,
    data: tableData,
    title,
    detailAction = false,
    deleteAction = false,
    editAction = false,
  } = props;

  const { selectedRow, CustomToolbar, modal, actions } =
    useContext(DataTableContext);

  const [columns] = useState(colDefs);

  const [data, setData] = useState(tableData);

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={data}
      components={{
        Toolbar: (props) => (
          <div>
            <MTableToolbar {...props} />
            {CustomToolbar ? <CustomToolbar></CustomToolbar> : null}
          </div>
        ),
      }}
      icons={tableIcons}
      actions={[
        editAction
          ? {
              icon: Edit,
              tooltip: "Editar",
              onClick: (event, rowData) => {
                modal.setModalOpen(true);
                selectedRow.setSelectedRowData(rowData);
                actions.setShowEdit(true);
              },
            }
          : null,
        deleteAction
          ? {
              icon: DeleteOutline,
              tooltip: "Eliminar",
              onClick: (event, rowData) => {},
            }
          : null,
        detailAction
          ? {
              icon: Search,
              tooltip: "Ver detalle",
              onClick: (event, rowData) => {
                actions.goToDetails(rowData);
              },
            }
          : null,
      ]}
      options={{
        actionsColumnIndex: -1,
        draggable: false,
      }}
      localization={{
        header: {
          actions: "Acciones",
        },
      }}
    />
  );
};

export default DataTable;
