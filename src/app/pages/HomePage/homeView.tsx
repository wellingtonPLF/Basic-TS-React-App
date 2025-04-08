import styles from "./homeStyle.module.css"

const HomeView = () => {
  return (
      <>
          <div className="flex-center" id={styles.homePage}>HomePage</div>
          <div className={`${styles['description']} bg-gray-500`}>description</div>
      </>
  );
};

export default HomeView;
