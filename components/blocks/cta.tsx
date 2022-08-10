import * as React from "react";
import { Buttons } from "../buttons";
import { Section } from "../section";
import { Content } from "../content";

export const CTA = ({ data, parentField = "" }) => {
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div
        className="absolute inset-0 -z-1 bg-white"
        style={{ clipPath: "polygon(7% 7%, 100% 0%, 100% 100%, 7% 93%)" }}
      ></div>
      <div className={`relative flex items-center gap-10 p-20 px-40 mb-20 max-w-desktop-full mx-auto sm:flex-col sm:px-0`}>
        <div className="content-wrap w-1/3 flex-1 max-w-sm sm:order-2 sm:w-full">
          <Content
            label = {data.label}
            headline = {data.headline}
            subhead = {data.subhead}
            body = {data.body}
            buttons = {[]}
            labelStyles = {data.style?.labelStyles}
            headlineStyles = {data.style?.headlineStyles}
            subheadStyles = {data.style?.subheadStyles}
            textStyles = {data.style?.textStyles}
            alignment = {data.style?.alignment}
            order = {data.style?.contentOrder}
            width = "sm:w-full w-full"
            parentField = {parentField}
            className = "text-center"
          />
        </div>
        <div className="image-wrap flex-none sm:order-1 sm:w-full">
          {data.image?.src && (
            <img
              className="image sm:mx-auto"
              alt={data.image?.alt}
              src={data.image?.src}
              width="225px"
              height="225px"
              data-tinafield={`${parentField}.image`}
            />
          )}
        </div>
        <div className="button-wrap w-1/3 flex-1 text-center sm:order-3 sm:w-full">
          <Buttons
            buttons={data.buttons}
            className={``}
            parentField={`${parentField}.buttons`}
          />
        </div>
      </div>
    </Section>
  );
};
