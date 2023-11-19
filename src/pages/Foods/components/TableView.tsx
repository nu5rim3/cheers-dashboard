import React, { useEffect, useState } from 'react'
import useFoodServices from '../../../firebase/services/food.services';
import { userSelector } from '../../../store/reducers/userDetails/user.selector';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button/Button';
import Search from '../../../components/Search';
import { currencyConvertor } from '../../../utils/coreFunctions';

const TableView: React.FC = () => {

  const [tableData, setTableData] = useState<IFood[]>([]);
  const [filterTableData, setFilterTableData] = useState<IFood[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { getListByUserId } = useFoodServices();
  const user = userSelector();

  useEffect(() => {
    if (user.uid !== undefined) {
      setLoading(true);
      getListByUserId && getListByUserId(user.uid)
        .then((res: any) => {
          setFilterTableData(res)
          setTableData(res);
          setLoading(false);
        })
    }
  }, [user])

  console.log('[tableData] - ', tableData);

  const onView = (id: string) => {
    //TODO: open the modal and show the details using ID,
    console.log('[onView] - ', id)
  }
  const onEdit = (id: string) => {
    //TODO: open the eidt modal and the details using ID,
    console.log('[onEdit] - ', id)
  }
  const onRemove = (id: string) => {
    //TODO: open confirmation and remove call
    console.log('[onRemove] - ', id)
  }

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      headerAlign: "center",
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250,
      headerAlign: "center",
    },
    {
      field: 'isActive',
      headerName: 'Status',
      width: 250,
      align: "center",
      headerAlign: "center",
      renderCell: (params: any) =>
        <Chip
          label={params.row.isActive ? "Active" : "Inactive"}
          color={params.row.isActive ? "success" : "warning"}
          variant="outlined"
        />
    },
    {
      field: 'price',
      headerName: 'Price (RS:)',
      width: 250,
      align: "right",
      headerAlign: "center",
      renderCell: (params: any) => currencyConvertor(params.row.price),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 450,
      align: "right",
      headerAlign: "right",
      renderCell: (params: any) => <div>
        <Button
          variant="text"
          size='small'
          onClick={() => onView(params.row.id)
          }
        >
          View
        </Button>
        <Button
          variant="text"
          size='small'
          onClick={() => onEdit(params.row.id)
          }>
          Edit
        </Button>
        <Button variant="text"
          size='small'
          onClick={() => onRemove(params.row.id)
          }>Remove</Button>
      </div>,
    }
  ];

  return (
    <>
      <Search dataSource={tableData} setDataSource={setFilterTableData} />
      <div style={{ height: '70vh', width: '100%' }}>
        <DataGrid
          showColumnVerticalBorder
          showCellVerticalBorder
          rows={filterTableData || tableData || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          loading={loading}
        // checkboxSelection
        />
      </div>
    </>
  )
}

export default TableView;