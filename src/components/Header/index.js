import styles from './styles.module.css';

const Header = ({searchInput, handleInputChange}) => {
  return (
    <div className={styles.header_container}>
        <h1 className={styles.heading}>Tickit</h1>

        <input 
          className={styles.search_input}
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleInputChange}
        />
      </div>
  )
}

export default Header;