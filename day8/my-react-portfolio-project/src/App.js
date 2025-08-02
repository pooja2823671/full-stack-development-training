import { MyContact } from "./Contact.js";
import { MyDetails } from "./About.js";
import { MySkills } from "./Skill.js";

function App(){
  return (
    <div className="p-6 bg-gray-100 min-h-screen font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">This is my React Portfolio Project</h1>
      <MyDetails />
      <MySkills />
      <MyContact />
    </div>
  );
}

export { App };
