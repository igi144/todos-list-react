import { SectionBody , SectionHeader, SectionContent } from "./styled";

const Section = ({ title, body, extraHeaderContent,}) => (
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
);

export default Section;