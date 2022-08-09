import * as React from "react";
import { Section } from "../section";


export const Rule = ({ data, parentField = ""  }) => {
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`${data.padding} max-w-desktop-full mx-auto`}>
        <div className="h-1.5 w-full bg-white"></div>
      </div>
    </Section>
  );
};
