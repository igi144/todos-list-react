import Header from "../../common/Header";
import Section from "../../common/Section";
import { GlobalStyle } from "../../myGlobalStyle";
import { Wrapper } from "./styled";

export const Autor = () => (
  <>
    <GlobalStyle />
    <Header title="O autorze" />
    <Section
      title="Igor Pelczarski"
      body={<Wrapper>Cześć! Nazywam się Igor Pelczarski, mam 29 lat. Obecnie uczę się programowania w YouCode i jest to moja pierwsza aplikacja 😎</Wrapper>}
    />
  </>
)