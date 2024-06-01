import Header from "./components/header/header";
import CoreConcept from "./components/core/coreconcepts";
import componentsImg from "./assets/components.png";
import componentsImg1 from "./assets/config.png";
import componentsImg2 from "./assets/jsx-ui.png";
import componentsImg3 from "./assets/state-mgmt.png";
import {CORE_CONCEPTS} from "./data.js";
import Tabbutton from "./components/core/Tabbutton/Tabbutton.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Cencepts</h2>
          <ul>
            <CoreConcept  {...CORE_CONCEPTS[0]}/>
            <CoreConcept  {...CORE_CONCEPTS[1]}/>
            <CoreConcept  {...CORE_CONCEPTS[2]}/>
            <CoreConcept  {...CORE_CONCEPTS[3]}/>
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
                <Tabbutton>Components</Tabbutton>
                <Tabbutton>JSX</Tabbutton>
                <Tabbutton>Props</Tabbutton>
                <Tabbutton>State</Tabbutton>
                </menu>
            </section>
      </main>
    </div>
  );
}

export default App;
