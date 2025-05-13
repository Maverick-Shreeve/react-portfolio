import styles from './FooterStyles.module.css';
//copymark my name becuase why not
function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Maverick Shreeve. <br />
      </p>
    </section>
  );
}

export default Footer;