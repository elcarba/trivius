import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const table = ({ cols, data, bordered, hoverable, striped, theme, hideTHead }) => {
  return (
    <div className={theme}>
      <Table
        responsive
        bordered={bordered}
        borderless={!bordered}
        striped={striped}
        hover={hoverable}
      >
        <thead className={`${hideTHead ? 'hide' : ''}`}>
        <tr>
          {cols.map((headerItem, index) => (
            <th key={index} className={headerItem.className}>{headerItem.title}</th>
          ))}
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {cols.map((col, key) => (
              <td className={col.className} key={key}>{col.render(item)}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </Table>
    </div>
  )
}

table.propTypes = {
  cols: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  hideTHead: PropTypes.bool,
  bordered: PropTypes.bool,
  hoverable: PropTypes.bool,
  striped: PropTypes.bool,
  theme: PropTypes.string,
};

table.defaultProps = {
  bordered: true,
  hideTHead: false,
  hoverable: false,
  striped: false,
  theme: 'th-app',
};

export default table;