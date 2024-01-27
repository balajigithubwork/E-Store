import Navbar from "../../components/Navbar/Navbar";
import styles from "./index.module.css";
 
function About() {
  return (
    <>
     <Navbar />
    <div  className={styles.maindiv}>
      <h1>About This Project</h1>
      <section className={styles.gettingstarted}>
        <h2>Folder Structure</h2>
        <ul>
          <li>
            <strong>src</strong>: Main source code directory
            <ul>
            <li>assets: Storing assests like images, svg icons etc.,</li>
              <li>components: Reusable React components.</li>
              <li>view: Individual pages of the app.</li>
              <li>validations: It containes validations of forms (using yup for validations)</li>
              <li>App.css / index.css: Global CSS styles</li>
            </ul>
          </li>
          <li>
            <strong>public</strong>: Public assets like images and favicons
          </li>
          <li>
            <strong>package.json</strong>: Project dependencies and scripts
          </li>
        </ul>
      </section>
      <section className={styles.gettingstarted}>
        <h2>Getting Started</h2>
        <ol>
          <li>Prerequisites: Node.js and npm (or yarn)</li>
          <li>Installation: `npm install` or `yarn install`</li>
          <li>Development: `npm run dev` or `yarn dev`</li>
          <li>Production build: `npm run build` or `yarn build`</li>
        </ol>
      </section>
    </div>
    </>
  );
}
 
export default About;