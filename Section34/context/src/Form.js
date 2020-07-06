import React, { Component } from 'react';
import { Avatar, Button, FormControl, FormControlLabel, Checkbox, Input, InputLabel, Paper, Typography, Select, withStyles, MenuItem } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { LanguageContext } from './contexts/LanguageContext';
import styles from './styles/FormStyles';

const dictionary = {
    english: {
        signIn: 'Sign In',
        email: 'Email',
        password: 'Password',
        remember: 'Remember Me'
    },
    french: {
        signIn: 'Se Connecter',
        email: 'Adresse Èlectronique',
        password: 'Mot de Passe',
        remember: 'Souviens-toi De Moi'
    },
    spanish: {
        signIn: 'Registrarse',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        remember: 'Recuérdame'
    }
}

class Form extends Component {
    static contextType = LanguageContext;

    render() {
        const { language, changeLanguage } = this.context;
        const { email, signIn, password, remember } = dictionary[language];
        const { classes } = this.props;

        return(
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant='h5'>{signIn}</Typography>
                    <Select value={language} onChange={changeLanguage}>
                        <MenuItem value='english'>English</MenuItem>
                        <MenuItem value='french'>French</MenuItem>
                        <MenuItem value='spanish'>Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>{email}</InputLabel>
                            <Input id='email' name='email' autoFocus></Input>
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>{password}</InputLabel>
                            <Input id='password' name='password' autoFocus></Input>
                        </FormControl>
                        <FormControlLabel control={<Checkbox color='primary' />} label={remember}/>
                        <Button variant='contained' type='submit' fullWidth color='primary' className={classes.submit}>{signIn}</Button>
                    </form>
                </Paper>
            </main>
        );
    }
}

export default withStyles(styles)(Form);