import React from 'react';
import { Skeleton, Divider, Alert } from 'antd';
import './ListingsSkeleton.scss';

interface Props {
  title: string;
  error?: boolean;
}

const ListingsSkeleton = ({ title, error = false }: Props) => {
  const errorAlert = error ? (
    <Alert
      className="listing-skeleton__alert"
      type="error"
      message="Something went wrong,please try later."
    />
  ) : null;

  return (
    <div className="listing-skeleton">
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
    </div>
  );
};
export default ListingsSkeleton;
