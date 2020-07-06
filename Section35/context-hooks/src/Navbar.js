import React, { useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ThemeContext } from './contexts/ThemeContext';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './styles/NavbarStyles';

const dictionary = {
    english: {
        search: 'Search',
        flag: '🇬🇧️'
    },
    french: {
        search: 'Chercher',
        flag: '🇫🇷️'
    },
    spanish: {
        search: 'Buscar',
        flag: '🇪🇸️'
    }
}

function Navbar(props) {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { search, flag } = dictionary[language];
    const { classes } = props;

    return(
        <div className={classes.root}>
            <AppBar position='static' color={isDarkMode ? 'default' : 'primary'}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit'>
                        <span>{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} varitan='h6' color='inherit'>
                        App Title
                    <Switch onChange={toggleTheme} />
                    </Typography>
                    <div className={classes.grow}>

                    </div>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            placeholder={`${search}...`}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Navbar);