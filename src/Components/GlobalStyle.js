import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }




    /* lexend-deca-100 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 100;
  src: url('../fonts/lexend-deca-v17-latin-100.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-100.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-100.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-100.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-100.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-100.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-200 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 200;
  src: url('../fonts/lexend-deca-v17-latin-200.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-200.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-200.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-300 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 300;
  src: url('../fonts/lexend-deca-v17-latin-300.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-300.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-300.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-regular - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/lexend-deca-v17-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-regular.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-500 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  src: url('../fonts/lexend-deca-v17-latin-500.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-500.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-500.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-500.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-500.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-600 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 600;
  src: url('../fonts/lexend-deca-v17-latin-600.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-600.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-600.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-600.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-600.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-700 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  src: url('../fonts/lexend-deca-v17-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-700.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-800 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 800;
  src: url('../fonts/lexend-deca-v17-latin-800.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-800.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-800.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
/* lexend-deca-900 - latin */
@font-face {
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 900;
  src: url('../fonts/lexend-deca-v17-latin-900.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lexend-deca-v17-latin-900.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lexend-deca-v17-latin-900.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-900.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lexend-deca-v17-latin-900.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lexend-deca-v17-latin-900.svg#LexendDeca') format('svg'); /* Legacy iOS */
}
`

export default GlobalStyle