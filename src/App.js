import ContactMain from "./components/ContactMain/ContactMain.js";
import SideBar from "./components/SideBar/SideBar.js";

import "./App.scss";

function App() {
  return (
    <div className='App'>
      <SideBar />
      <ContactMain />
    </div>
  );
}

export default App;
