import { ValueFormatterParams } from 'ag-grid-community';
import moment from 'moment';
import { CompaniesAgGridType, CompaniesType } from 'services/companiesAPIService';

export function agGridRowDrag(params) {
  // only rows that are NOT groups should be draggable
  return !params.node.group;
}

export function agGridDateFormatter(params: ValueFormatterParams) {
  return moment(params.value).format('LLL');
}

export function agGridCompaniesDTO(companies : CompaniesType[]): CompaniesAgGridType[] {
  return companies.map(({
    id,
    name,
    parent,
    customer_id,
    createdAt,
    updatedAt,
  }) => ({
    id,
    name,
    parent,
    customer_id,
    createdAt,
    updatedAt,
  }));
}
