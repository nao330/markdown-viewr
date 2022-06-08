import styles from './markdownViewer.module.css';

function MarkdownTextarea() {
  return (
    <form className={styles.form}>
      <textarea className={styles.textarea}>
      </textarea>
    </form>
  );
}

function MarkdownPreview() {
  return <div></div>;
}

export default function MarkdownViewer() {
  return (
    <div className={styles.container}>
      <MarkdownTextarea />
      <MarkdownPreview />
    </div>
  );
}