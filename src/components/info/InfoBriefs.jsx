import { Translate } from 'react-redux-i18n';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Button16, Grid } from '../../ui';
import { Table, TableContainer, Title } from './info.styles';
import NewBriefModal from '../../modal/NewBriefModal';
import { getBrief, listBriefs } from '../../store/actions/briefActions';
import Loader from '../../ui/Loader';
import ErrorModal from '../../modal/ErrorModal';

export const InfoBriefs = ({ project }) => {
  const [isModalShow, setModalShow] = useState(false);

  const {
    loading, briefs, error,
  } = useSelector(state => state?.briefReducer);

  const dispatch = useDispatch();

  const onBriefHandler = async item => {
    dispatch(getBrief(item._id));
    const url = `/root/${project.quarter}/${project.homeDir}/materials/brief/${item.filename}`;
    axios({
      url,
      method: 'GET',
      responseType: 'blob', // important
    }).then(response => {
      const url1 = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url1;
      link.setAttribute('download', `${item.filename}`);
      document.body.appendChild(link);
      link.click();
    });
  };

  useEffect(() => {
    dispatch(listBriefs());
  }, [dispatch]);

  return (
    <>
      <Grid cols="auto max-content" gap={1} marginBottom="5px">
        <Title>
          <Translate value="menu.briefs" />
        </Title>

        <Button16 icon="Plus" onClick={() => setModalShow(true)} />
        <NewBriefModal
          isOpen={isModalShow}
          closeAction={() => setModalShow(false)}
          project={project}
        />
      </Grid>

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorModal error="error" />
      ) : (
        briefs !== 'undefined'
        && briefs.length > 0 && (
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Filename</th>
                  <th>Date</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {briefs.map(item => (
                  <tr key={item._id} className="link" onClick={() => onBriefHandler(item)}>
                    <td>{item.name}</td>
                    <td>{item.filename}</td>
                    <td className="date">2021.03.02</td>
                    <td className="info">Production</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        )
      )}
    </>
  );
};
