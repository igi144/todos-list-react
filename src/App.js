import { Autor } from "./features/autor/AuthorPage"
import { TaskPage } from "./features/tasks/TaskPage";
import { TasksPage } from "./features/tasks/TasksPage/index";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Container, NavWrapper, StyledNavLink } from "./myGlobalStyle";

export const App = () => (

  <Container>
    <HashRouter>
      <nav>
        <NavWrapper>
          <li>
            <StyledNavLink activeClassName="active"
              to="/zadania"
              style={{ textDecoration: 'none' }}
            >
              Zadania
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink activeClassName="active"
              to="/author"
              style={{ textDecoration: 'none' }}
            >
              Autor
            </StyledNavLink>
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
            <Redirect to="/zadania" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  </Container>
)