
const Header = () => {
    return (
        <header className="header bg-white p-2 m-1">
            <nav className="flex items-center justify-between">
                <h1 className="font-bold">Travel Planner</h1>
                <button className="btn btn-primary">Plan a trip</button>
            </nav>
        </header>
    );
};

export default Header;