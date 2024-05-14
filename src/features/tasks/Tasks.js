import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { GlobalStyle } from "../../myGlobalStyle";

function Tasks() {
  return (
    <>
      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList />
        }
        extraHeaderContent={
          <Buttons />
        }
      />
    </>
  );
};

export default Tasks;
