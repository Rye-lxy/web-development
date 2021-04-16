import "../styles/globals.css"
import Navigation from "./components/Navigation"
import Left from "./components/Left"
import Right from "./components/Right"
import Center from "./components/Center"

export default function App() {
  return (
    <body>
          <Navigation />
        <main>
          <Left />
          <Center />
          <Right />
        </main>
    </body>
  );
}