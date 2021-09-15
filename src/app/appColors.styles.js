import { createGlobalStyle } from 'styled-components';

const color = (color1, color2) => p => (p.theme.mode === 'dark' ? color1 : color2);

export const GlobalStyle = createGlobalStyle`

  :root {

    --accent: ${color('#F04050', '#ee1f34')};
    --accentBg: ${color('#e5182f', '#ef0e23')};
    --blue: ${color('#0069D9', '#0069D9')};
    --blue-dark: ${color('#2350b7', '#0069D9')};
    --blue-light: ${color('#76A6E6', '#0794DD')};
    --green: ${color('#00CC00', '#007E2B')};
    --green-dark: #007E2B;
    --yellow: #CF9219;

    --status-active: ${color('#c8ced6', '#2a2a35')};
    --status-approving: ${color('#DD9000', '#DD8000')};
    --status-paused: ${color('#607080', '#8090A0')};
    --status-complete: ${color('#00CC00', '#00B433')};
    --status-archived: ${color('#007E2B', '#007E2B')};

    --project-dummy-fg: ${color('#23242A', '#1d1d22')};
    --project-dummy-bg: ${color('#525560', '#82848BAA')};
    --bg-project-dummy2: #52556099;

    --project-card-main-bg: ${color('#23242A', '#CBCBCD')};
    --project-card-info-bg: ${color('#2B2B33', '#DDDDDF')};
    --project-card-info-bg-hover: ${color('#2E2F38', '#E4E4E6')};

    --prorogress-bar-bg: ${color('#2F2F3A', '#BABABC')};

    --bg-main: ${color('#23242A', '#D8D9DA')};
    --bg-header: ${color('#202127', '#CCCDCF')};
    --fg-normal: ${color('#9192A1', '#23242A')};

    --modal-overlay:    #0d0d11AA;
    --modal-header-fg:  #C8CED6;
    --modal-header-bg:  #0069D9;
    --modal-footer-bg:  ${color('#1C1D24', '#B4B5B8')};

    --scroll-fg: ${color('#404149', '#808184')};
    --scroll-bg: ${color('#40414933', '#80818433')};

    --navbar-bg: ${color('#1C1D24', '#C4C5C8')};
    --navbar-submenu-bg1: ${color('#21222866', '#CACACA66')};
    --navbar-submenu-bg2: ${color('#212228', '#CACACA99')};
    --navbar-submenu-selected: ${color('#06080F99', '#F3F3F399')};
    --navbar-toggle: ${color('#18191f', '#babcbe')};
    --navbar-bg-selected: ${color('#06080F', '#52545d')};
    --navbar-fg-selected: ${color('#C8CED6', '#E2E2E2')};
    --navbar-fg-hover: ${color('#C8CED6', '#16161d')};
    --navbar-bg-pressed: ${color('#0C0D16', '#52545d')};
    --navbar-fg-pressed: ${color('#646574', '#C2C2C2')};

    --table1-row1: ${color('#23242A', '#DADADA')};
    --table1-row2: ${color('#212228', '#DFDFDF')};
    --table1-selected: ${color('#16161d', '#F3F3F3')};
    --table1-header: ${color('#0d0d11', '#62646d')};
    --table1-header-fg: ${color('#646574', '#C0C0C0')};
    --table1-header-fg-hover: ${color('#9192A1', '#E0E0E0')};
    --table1-border: ${color('#00000040', '#22222211')};

    --group-border: ${color('#1A1A22', '#B2B2B2')};

    --input-bg: ${color('#282830', '#DEDEDE')};
    --input-bg-focus: ${color('#222228', '#E3E3E3')};
    --input-border: ${color('#202026', '#BBBBBB')};
    --input-shadow: ${color('#11111133', '#99999955')};
    --input-border-focus: ${color('#0066CCBB', '#0069D9AA')};

    --text-fg-high2: ${color('#eceff1', '#101315')};
    --text-fg-high: ${color('#C8CED6', '#1b1e22')};
    --text-fg-high-selected: ${color('#C8CED6', '#e0e5ec')};
    --text-fg-mid: ${color('#9192A1', '#50525d')};
    --text-fg-mid-selected: ${color('#9192A1', '#bdccde')};
    --text-fg-low: ${color('#646574', '#72747e')};
    --text-fg-low-selected: ${color('#646574', '#97bfdb')};

    --btn-fg-normal: ${color('#9192A1', '#565666')};
    --btn-bg-normal: ${color('#35373E', '#E0E1E4')};
    --btn-border-normal: ${color('#35373E', '#E0E1E4')};
    --btn-border-hover: ${color('#45474EAA', '#F0F1F466')};
    --btn-fg-hover: ${color('#C8CED6', '#16161d')};
    --btn-fg-pressed: #5F6069;
    --btn-bg-pressed: ${color('#2C2D32', '#aaabb7')};
    --btn-fg-selected: ${color('#0070F0', '#E2E2E2')};
    --btn-bg-selected: ${color('#2C2D32', '#0070F0')};
    --btn-fg-disabled: #4B4C54;
    --btn-shadow: ${color('#00000040', '#00000040')};
    --btn-glow: ${color('#00000050', '#FFFFFF66')};


    --switcher-fg: ${color('#61626d', '#dbdde3')};
    --switcher-fg-checked: ${color('#bec6d0', '#f5f6f8')};
    --switcher-bg: ${color('#00000066', '#96969E')};
    --switcher-bg-checked: var(--blue-dark);

    --z-fixed: 100;
  }

`;
