import './hey.css'
function Hey({name}) {
    const now = new Date();
    const hours = now.getHours();
    let wish = '';
    
    if (hours < 12) {
        wish = 'Morning';
    } else if (hours < 18) {
        wish = 'Afternoon';
    } else {
        wish = 'Evening';
    }
    return (
        <>
            <h1 className="title">Hello {name ?? 'Friend'}</h1>
            <h2>Good {wish}</h2>
        </>
    );
}

export default Hey