import { ReactElement } from "react";
import { DescriptionText, DescriptionTitle, SectionDescriptionContainer, SectionItemView } from "./style";

interface SectionItemProps {
  title: string;
  icon: ReactElement
  description: string;
}

export const SectionItem = ({
  title,
  icon: Icon,
  description
}: SectionItemProps) => {
  return (
    <SectionItemView>
      {Icon}

      <SectionDescriptionContainer>
        <DescriptionTitle>{title}</DescriptionTitle>
        <DescriptionText>{description}</DescriptionText>
      </SectionDescriptionContainer>
    </SectionItemView>
  )
}
