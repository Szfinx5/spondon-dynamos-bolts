import styles from "../styles/PageHeader.module.css";
import shared from "../styles/Shared.module.css";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
}

// Title band used at the top of every page except Home
const PageHeader = ({ eyebrow, title }: PageHeaderProps) => (
  <>
    <section className={styles.header}>
      <div className={shared.container}>
        <p className={shared.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </section>
    <div className={shared.stripe} aria-hidden="true" />
  </>
);

export default PageHeader;
