import { Autor } from "./features/autor/AuthorPage"
import { TaskPage } from "./features/tasks/TaskPage";
import { TasksPage } from "./features/tasks/TasksPage/index";

import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Container, NavWrapper } from "./myGlobalStyle";

export const App = () => (

  <Container>
  <HashRouter>
    <nav>
      <NavWrapper>
        <li>
          <Link
            to="/zadania"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Zadania
          </Link>
        </li>
        <li>
          <Link
            to="/author"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Autor
          </Link>
        </li>
      </NavWrapper>
      <Switch>
        <Route path="/zadania/:id">
          <TaskPage />
        </Route>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/author">
          <Autor />
        </Route>
        <Route path="/">
        <Redirect to="/zadania"/>
        </Route>
      </Switch>
    </nav>
  </HashRouter>
  </Container>
)