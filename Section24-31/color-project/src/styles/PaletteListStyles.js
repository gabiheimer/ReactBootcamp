import sizes from './sizes';
import bg from './Abstract-Envelope.svg';

export default {
    "@global": {
        ".fade-exit": {
            opacity: 1
        },
        ".fade-exit-active": {
            opacity: 0,
            transition: 'opacity 500ms ease-out'
        }
    },
    root: {
        backgroundColor: '#7338aa',
        backgroundImage: `url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        /* background by svgbackgrounds.com */
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'auto'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: '2em',
        [sizes.down('xl')]: {
            width: '65%'
        },
        [sizes.down('lg')]: {
            width: '75%'
        },
        [sizes.down('sm')]: {
            width: '85%'
        },
        [sizes.down('xs')]: {
            width: '65%'
        }
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
        "& a": {
            color: 'white'
        }
    },
    palettes: {
        boxSizing: 'content-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '2em',
        [sizes.down('md')]:{
            gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [sizes.down('xs')]:{
            gridTemplateColumns: 'repeat(1, 1fr)',
            gridGap: '1em'
        }
    },
    heading: {
        fontSize: '2rem'
    }
}