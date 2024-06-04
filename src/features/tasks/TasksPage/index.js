import Form from "./Form/";
import { TasksList } from "../TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { GlobalStyle } from "../../../myGlobalStyle";
import { Search } from "./Search";



export const TasksPage = () => {

  return (
    <>

      <GlobalStyle />
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
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


