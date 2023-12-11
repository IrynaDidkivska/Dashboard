import { useContext } from 'react';
import {
  ColumnName,
  ColumnText,
  Table,
  TableCell,
} from './CustomersList.styled';
import { MyContext } from '@/context/MyContext';

const CustomersList = () => {
  const items = useContext(MyContext);
  return (
    <Table>
      <thead>
        <ColumnName>
          <ColumnText>Customer Name</ColumnText>
          <ColumnText>Company</ColumnText>
          <ColumnText>Phone Number</ColumnText>
          <ColumnText>Email</ColumnText>
          <ColumnText>Country</ColumnText>
          <ColumnText>Status</ColumnText>
        </ColumnName>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TableCell>{item.customerName}</TableCell>
            <TableCell>{item.company}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.country}</TableCell>
            <TableCell $active={item.status}>{item.status}</TableCell>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomersList;
