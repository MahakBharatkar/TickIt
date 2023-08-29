import styles from "./styles.module.css";

const TAB_MAPPING = [
  {
    priority: "Low",
  },
  {
    priority: "Medium",
  },
  {
    priority: "High",
  },
];

const Header = ({
  searchInput,
  handleInputChange,
  activeTab,
  setActiveTab,
  setAddNewTask,
}) => {
  console.log("activeTab", activeTab);

  return (
    <div className={styles.header_container}>
      <div className={styles.search_wrapper}>
        <h1 className={styles.heading}>Tickit</h1>
        <input
          className={styles.search_input}
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <button
          className={styles.add_new_button}
          onClick={() => setAddNewTask(true)}
        >
          + New Task
        </button>
      </div>

      <div className={styles.tab_wrapper}>
        <div className={styles.tab_container}>
          {TAB_MAPPING.map((item) => {
            const { priority } = item;
            return (
              <div
                className={`${styles.tab_panel} ${
                  activeTab === priority ? styles.active : ""
                }`}
                onClick={() => setActiveTab(priority)}
              >
                {priority}
              </div>
            );
          })}
        </div>
        
        <button
        className={styles.reset_tab_btn}
        onClick={(e) => {
          e.stopPropagation();
          setActiveTab("");
        }}
      >
        <i className="fas fa-undo"> </i>
      </button>
      </div>

      
    </div>
  );
};

export default Header;
