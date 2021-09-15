import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import * as s from './DatesMenu.styles';

import SubmenuItem from '../SubmenuItem';
import { setQuarterProjects } from '../../../store/actions/projectActions';

const DatesMenu = props => {
  const { isSidebarOpen = true, isByDateMenuShow = true } = props;

  const [selectedQuarter, setSelectedQuarter] = useState(null);

  const { projects } = useSelector(state => state?.projectsReducer);
  // const projects = props.projects

  const dispatch = useDispatch();

  const quartersFilter = arr => {
    const res = {};

    arr.forEach(item => {
      const key = moment(item.dateCreated).format('YYYY-Q');
      if (!res[key]) {
        res[key] = { quarter: key, count: 0 };
      }
      res[key].count += 1;
    });
    return Object.values(res);
  };

  const itemsData = quartersFilter(projects).sort((a, b) => (a.quarter > b.quarter ? -1 : 1));

  const handleItemClick = index => {
    if (selectedQuarter === index) {
      setSelectedQuarter(null);
      dispatch(setQuarterProjects(projects));
    } else {
      setSelectedQuarter(index);
      const quarterProjects = projects.filter(
        item => moment(item.dateCreated).format('YYYY-Q') === itemsData[index].quarter,
      );
      dispatch(setQuarterProjects(quarterProjects));
    }
  };

  useEffect(() => {
    dispatch(setQuarterProjects(projects));
    setSelectedQuarter(null);
  }, [dispatch, projects]);

  const byDateMenuJSX = itemsData.map((item, index) => (
    <SubmenuItem
      text={isSidebarOpen ? item.quarter : item.quarter.substr(2, 4)}
        // text={item.quarter}
      count={isSidebarOpen && item.count}
        // count={item.count}
      isSelected={selectedQuarter === index}
      isSidebarOpen={isSidebarOpen}
      key={index}
      onClick={() => handleItemClick(index)}
    />
  ));

  return (
    <s.SubmenuContainer isMenuShow={isByDateMenuShow} isSidebarOpen={isSidebarOpen}>
      {byDateMenuJSX}
    </s.SubmenuContainer>
  );
};

export default DatesMenu;
