import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from "./data";
import Categories from "./Categories";

const allcategories = ["All", ...new Set(menu.map(item => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allcategories);
  return (
    <main>
        <section className="menu">
          <Title text='our Menu'/>
          <Categories categories={categories} />
          <Menu items={menuItems} />
        </section>
    </main>
  );
};
export default App;
