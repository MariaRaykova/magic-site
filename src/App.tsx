
import styles from './App.module.css'

function App(props: any) {
  return (
    <div className={styles.App}>

      {props.children}

    </div>
  )
}

export default App
