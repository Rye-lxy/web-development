import styles from "../styles/globals.css"
import Navigation from "./components/Navigation"
import Left from "./components/Left"
import Right from "./components/Right"
import Center from "./components/Center"

export default function App() {
  return (
    <body>
        <main className={styles.main}>
          <Navigation />
          <Left />
          <Center />
          <Right />
        </main>
    </body>
  );
}