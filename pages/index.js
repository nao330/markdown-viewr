import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MarkdownViewer from '../components/markdownViewer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Markdown Viewer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>
            Markdown Viewer
        </h1>
      </header>

      <main className={styles.main}>
        <MarkdownViewer />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/nao330"
          target="_blank"
        >
          Powered by Nao
        </a>
      </footer>
    </div>
  )
}
