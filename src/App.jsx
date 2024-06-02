import Header from "./components/header/header";
import CoreConcept from "./components/core/coreconcepts";
import componentsImg from "./assets/components.png";
import componentsImg1 from "./assets/config.png";
import componentsImg2 from "./assets/jsx-ui.png";
import componentsImg3 from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data.js";
import Tabbutton from "./components/core/Tabbutton/Tabbutton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  // useState('Please click a button');
  const [selectedTopic, setSelectedTopic] = useState();
  // let tabContent = 'Please click a button';
  function handleselect(SelectedButton) {
    setSelectedTopic(SelectedButton);
    // tabContent = Selectbutton;
    console.log(selectedTopic);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
            {/* <CoreConcept  {...CORE_CONCEPTS[0]}/>
            <CoreConcept  {...CORE_CONCEPTS[1]}/>
            <CoreConcept  {...CORE_CONCEPTS[2]}/>
            <CoreConcept  {...CORE_CONCEPTS[3]}/> */}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
             <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
             <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
             <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />  */}

            {/* <section id="examples">
              <h2>Examples</h2>
              <menu>
                <Tabbutton>Components</Tabbutton>
              </menu>
            </section> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <Tabbutton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleselect("components")}
              props={() => handleselect("components")}
            >
             
              Components
            </Tabbutton>
            <Tabbutton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleselect("jsx")}
              props={() => handleselect("jsx")}
            >
             
              JSX
            </Tabbutton>
            <Tabbutton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleselect("props")}
              props={() => handleselect("props")}
            >
             
              Props
            </Tabbutton>
            <Tabbutton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleselect("state")}
              props={() => handleselect("state")}
            >
             
              State
            </Tabbutton>
          </menu>
          {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}

          {/* {tabContent} */}
          {/* {selectedTopic} */}
        </section>
      </main>
    </div>
  );
}

export default App;
