import { createSlice } from '@reduxjs/toolkit';

const themeModeLocal = localStorage.getItem('themeMode');
const sidebarExpandLocal = localStorage.getItem('sidebarExpand');
const infobarShowLocal = localStorage.getItem('infobarShow');
const viewModeLocal = localStorage.getItem('viewMode');
const viewFilterBarLocal = localStorage.getItem('viewFilterBar');
const viewFilterBarInit = {
  show: false,
  filters: {
    grid: {
      name: true,
      brand: true,
      client: true,
      agency: true,
      created: true,
      startDate: true,
      deadline: true,
      status: true,
      owner: null,
      details: null,
    },
    list: {
      name: true,
      brand: true,
      client: true,
      agency: true,
      created: true,
      startDate: true,
      deadline: true,
      status: true,
      owner: true,
      details: true,
    },
  },
};

const slice = createSlice({
  name: 'ui',
  initialState: {
    theme: { mode: themeModeLocal ? JSON.parse(themeModeLocal) : 'dark' },
    sidebarExpand: sidebarExpandLocal ? JSON.parse(sidebarExpandLocal) : true,
    infobarShow: infobarShowLocal ? JSON.parse(infobarShowLocal) : true,
    viewMode: viewModeLocal ? JSON.parse(viewModeLocal) : 'grid',
    viewFilterBar: viewFilterBarLocal ? JSON.parse(viewFilterBarLocal) : viewFilterBarInit,
  },
  reducers: {
    setThemeMode: (ui, action) => {
      ui.theme.mode = action.payload;
      localStorage.setItem('themeMode', JSON.stringify(ui.theme.mode));
    },
    toggleSidebarExpand: ui => {
      ui.sidebarExpand = !ui.sidebarExpand;
      localStorage.setItem('sidebarExpand', JSON.stringify(ui.sidebarExpand));
    },
    toggleInfobarShow: ui => {
      ui.infobarShow = !ui.infobarShow;
      localStorage.setItem('infobarShow', JSON.stringify(ui.infobarShow));
    },
    setViewMode: (ui, action) => {
      ui.viewMode = action.payload;
      localStorage.setItem('viewMode', JSON.stringify(ui.viewMode));
    },
    toggleViewFilterBarShow: ui => {
      ui.viewFilterBar.show = !ui.viewFilterBar.show;
      localStorage.setItem('viewFilterBar', JSON.stringify(ui.viewFilterBar));
    },
    setViewFilters: (ui, action) => {
      ui.viewFilterBar.filters = action.payload;
      localStorage.setItem('viewFilterBar', JSON.stringify(ui.viewFilterBar));
    },
  },
});

export const {
  setThemeMode,
  toggleSidebarExpand,
  toggleInfobarShow,
  setViewMode,
  toggleViewFilterBarShow,
  setViewFilters,
} = slice.actions;

export default slice.reducer;
