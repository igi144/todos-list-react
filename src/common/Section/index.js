import { AppContainer } from "../../myGlobalStyle";
import { SectionBody , SectionHeader, SectionContent } from "./styled";

const Section = ({ title, body, extraHeaderContent,}) => (

  <AppContainer>
  <SectionBody>
    <header>
      <SectionHeader>
        {title}
        {extraHeaderContent}
      </SectionHeader>
    </header>
    <SectionContent>
      {body}
    </SectionContent>
  </SectionBody>
  </AppContainer>
);

export default Section;