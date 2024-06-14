import { Autor } from "./features/autor/AuthorPage"
import { TaskPage } from "./features/tasks/TaskPage";
import { TasksPage } from "./features/tasks/TasksPage/index";

import { HashRouter, Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import { Wrapper } from "./myGlobalStyle";

export const App = () => (
  <HashRouter>
    <nav>
      <Wrapper>
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
      </Wrapper>
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
        </Route>
      </Switch>
    </nav>
  </HashRouter>
)