import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
    return (
        <div className="App">
            {/* <header className="App-header"> */}
                {/* <Greeting name="Sharon" /> */}
                {/* <GreetingF name="Sharon" /> */}
                {/* Componente de Listado de Tareas */}
                {/* Ejemplos de use de HOOKS */}
                {/* <Ejemplo1 /> */}
                {/* <Ejemplo2 /> */}
                {/* <MiComponenteConContexto /> */}
                {/* Todo lo que hay aquí, es tratado como props.children */}
                {/* <Ejemplo4 nombre="Martín">
                <h3>
                    Contenido del props.children
                </h3>
                </Ejemplo4> */}
                {/* <GreetingStyled name="Sharon" /> */}
            {/* </header> */}
            {/* Gestión de eventos */}
            {/* <Father /> */}
            {/* Ejemplos de renderizado condicional */}
            {/* <OptionalRender /> */}
            {/* Ejemplos de uso de Formik y Yup*/}
            {/* <LoginFormik /> */}
            {/* <RegisterFormik /> */}
            {/* PROYECTO FINAL */}
            <TaskListComponent />
        </div>
  );
}

export default App;
