import { Pagination } from '@mui/material';

const PaginationControls = ({ page, pageCount, onPageChange }) => {
  return <Pagination count={pageCount} page={page} onChange={(e, value) => onPageChange(value)} />;
};

export default PaginationControls;