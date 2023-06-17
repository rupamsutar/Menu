import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";

const allcategories = ["All", ...new Set(menu.map(item => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allcategories);
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
