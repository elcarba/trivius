import React from 'react';
import Table from '../../components/Table/Table';

const ranking = () => {
  const importFlagDy = (flagCode) => {
    return require(`react-flags-select/flags/${flagCode}.svg`);
  };

  const retrieveCountry = (flagCode) => {
    return <img src={importFlagDy(flagCode)} width={30} alt={flagCode}/>;
  };

  const retrieveData = () => {
    return [
      {
        "id": 1,
        "name": "Bret",
        "points": 1800,
        "country": retrieveCountry('ad'),
      },
      {
        "id": 2,
        "name": "Antonette",
        "points": 1400,
        "country": retrieveCountry('gb'),
      },
      {
        "id": 3,
        "name": "Samantha",
        "points": 1200,
        "country": retrieveCountry('au'),
      },
      {
        "id": 4,
        "name": "Karianne",
        "points": 1150,
        "country": retrieveCountry('pa'),
      },
      {
        "id": 5,
        "name": "Kamren",
        "points": 500,
        "country": retrieveCountry('ni'),
      },
      {
        "id": 6,
        "name": "Kamren2",
        "points": 500,
        "country": retrieveCountry('bt'),
      },
      {
        "id": 7,
        "name": "Kamren3",
        "points": 500,
        "country": retrieveCountry('ck'),
      },
      {
        "id": 8,
        "name": "Kamren4",
        "points": 500,
        "country": retrieveCountry('do'),
      },
      {
        "id": 9,
        "name": "Kamren5",
        "points": 500,
        "country": retrieveCountry('eg'),
      },
      {
        "id": 10,
        "name": "Kamren6",
        "points": 500,
        "country": retrieveCountry('ee'),
      }
    ];
  };

  const renderCols = () => {
    return [
      {
        title: '#',
        render: rowData => {
          return <span>{rowData.id}</span>;
        },
      },
      {
        title: '',
        render: rowData => {
          return <span>{rowData.country}</span>;
        },
      },
      {
        title: 'Name',
        className: 'w-50',
        render: rowData => {
          return <span>{rowData.name}</span>;
        },
      },
      {
        title: 'Points',
        className: 'w-50 text-center',
        render: rowData => {
          return <span>{rowData.points} pts</span>;
        },
      },
    ];
  };

  return (
    <div className="ranking-container col-sm-10 col-md-10 col-lg-8 mx-auto mt-5">
      <div className="box-heading">Ranking</div>
      <Table cols={renderCols()} bordered={false} striped hoverable data={retrieveData()} />
    </div>
  )
};

export default ranking;