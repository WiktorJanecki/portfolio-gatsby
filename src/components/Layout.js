import React from 'react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../utilities/theme'
import {GlobalStyles} from '../utilities/globalStyles'

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default Layout