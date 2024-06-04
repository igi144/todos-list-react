import Header from "../../common/Header";
import Section from "../../common/Section";
import { GlobalStyle } from "../../myGlobalStyle";

export const Autor = () => (
  <>
    <GlobalStyle />
    <Header title="O autorze" />
    <Section
      title="Igor Pelczarski"
      body={<>nanana</>}
    />
  </>
)