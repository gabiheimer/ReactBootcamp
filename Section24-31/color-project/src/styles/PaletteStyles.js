import sizes from './sizes';

export default {
    Palette: {
        height: "100vh",
        width: '100vw',
        display: "flex",
        flexDirection: "column",
        margin: '0',
        overflow: 'hidden'
    }, colors: {
        height: "90%"
    }, goBack: {
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: 1,
        backgroundColor: "black",
        "& a": {
            color: "white",
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left: '50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255,255,0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
            cursor: 'pointer',
            textDecoration: 'none'
        },
        [sizes.down('lg')]: {
            height: '33.33333%',
            width: '25%'
        },
        [sizes.down('md')]: {
            height: '20%',
            width: '50%'
        },
        [sizes.down('xs')]: {
            height: '10%',
            width: '100%'
        },
    }
}