import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  return (
    <main>
        <section className="menu">
          <Title text='our Menu'/>
          <Menu items={menuItems} />
        </section>
    </main>
  );
};
export default App;
