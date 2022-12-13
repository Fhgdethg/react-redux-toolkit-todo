import Form from "./components/Form/Form";
import TodoArr from "./components/TodoArr/TodoArr";
import s from './App.module.scss'
import BtnMode from "./components/BtnMode/BtnMode";
import { useConfigureMode } from './hooks/useConfigureMode.js'
import Scroler from "./components/Scroler/Scroler";

function App() {
  const { mode, configureMode } = useConfigureMode()

  return (
    <div 
    className={`${mode === '' ? '' : 'dark'} 
    ${s.all}`}
    >
      <div className={`${s.wrapper} dark:bg-bodyBgDark`}>
        <header className={`${s.header} dark:bg-bgHeadDark`}>
          <h1 className={`${s.title} dark:text-logoColorDark`}>Todo APP</h1>
          <BtnMode changeMode={configureMode} />
        </header>
        <main className={s.main}>
          <div className={s.container}>
            <section className={`${s.section} dark:bg-bgHeadDark !important`}>
              <Form />
              <TodoArr />
            </section>
          </div>
        </main>
        <Scroler>
          Go Top
        </Scroler>
      </div>
    </div>
  );
}

export default App;
