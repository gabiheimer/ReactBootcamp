import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Switch, withStyles } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';
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

class Navbar extends Component{
    static contextType = ThemeContext;
    
    render() {
        const { isDarkMode, toggleTheme } = this.context;
        const { language } = this.props.LanguageContext;
        const { search, flag } = dictionary[language];
        const { classes } = this.props;

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
}

export default withLanguageContext(withStyles(styles)(Navbar));