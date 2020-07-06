import Link from 'next/link';

export default function Navbar() {
    const styles = {
        padding: '1rem',
        backgroundColor: '#acdeff',
        margin: '0',
        display: 'flex',
        justifyContent: 'space-around'
    }

    return(
        <nav style={styles}>
            <Link href='/'>
                <a>HOME PAGE</a>
            </Link>
            <Link href='/about'>
                <a>ABOUT PAGE</a>
            </Link>
            <Link href='/contact'>
                <a>CONTACT PAGE</a>
            </Link>
        </nav>
    );
}