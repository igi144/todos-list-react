import { Autor } from "./features/autor/AuthorPage"
import { TaskPage } from "./features/tasks/TaskPage";
import { TasksPage } from "./features/tasks/TasksPage/index";

import { HashRouter, Link, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">
            Zadania
          </Link>
        </li>
        <li>
          <Link to="/author">
            Autor
          </Link>
        </li>
      </ul>
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
          Strona główna
        </Route>
      </Switch>
    </nav>
  </HashRouter>
)