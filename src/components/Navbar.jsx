function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>  Al-Boda Weather🌦️</h2>
      </div>

      <div className="nav-tabs">
        <button
          className={activeTab === "today" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("today")}
        >
          today
        </button>

        <button
          className={activeTab === "weekly" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("weekly")}
        >
          week
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
