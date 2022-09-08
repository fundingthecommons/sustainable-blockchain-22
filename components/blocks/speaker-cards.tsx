import * as React from "react";
import { Buttons } from "../buttons"
import { Content } from "../content";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Card = ({ data, index, parentField = ""  }) => {
  return (
    <div className="relative" data-tinafield={`${parentField}.${index}`}>
      <div className="absolute inset-0 top-16 -z-1 bg-white"></div>
      <div className="flex items-center">
        {data.imageSrc && (
          <img
            alt={data.speakerName}
            src={data.imageSrc}
            className="w-48 h-48 absolute top-0 left-1/2 transform -translate-x-1/2 rounded-full object-cover"
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
        <div className="p-10 pt-56 pb-14" >
          {/* {data.label && (
            <p
              className="text-md text-accent2 mb-2"
              data-tinafield={`${parentField}.${index}.label`}
            >{data.label}</p>
          )} */}
          {data.speaker && (
            <h3
              className="text-lg font-bold text-accent2 mb-1"
              data-tinafield={`${parentField}.${index}.speaker`}
            >{data.speaker}</h3>
          )}
          {data.title && (
            <h5
            className="text-sm text-accent2 mb-1"
            data-tinafield={`${parentField}.${index}.title`}
            >{data.title}</h5>
          )}
          {data.company && (
            <h4
              className="text-sm text-accent2 mb-1"
              data-tinafield={`${parentField}.${index}.company`}
            >{data.company}</h4>
          )}
          {data.text?.children && (
            <div className="text-md" data-tinafield={`${parentField}.${index}.text`}>
              <TinaMarkdown content={data.text} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


export const SpeakerCards = ({ data, parentField = "" }) => {
  return (
    <Section className="max-w-desktop-full mx-auto px-20 py-20 sm:px-10" background={data.background} navigationLabel={data.navigationLabel}>
      <Content
        label = ""
        headline = {data.headline}
        subhead = {data.subhead}
        body = {data.body}
        buttons = {data.buttons}
        labelStyles = {data.style?.labelStyles}
        headlineStyles = {data.style?.headlineStyles}
        subheadStyles = {data.style?.subheadStyles}
        textStyles = {data.style?.textStyles}
        alignment = {data.style?.alignment}
        order = {data.style?.contentOrder}
        width = "w-full"
        parentField={parentField}
      />
      <div className="speaker-cards grid grid-cols-3 gap-8 md:grid-cols-3 sm:grid-cols-2">
        {data.cards && (
          data.cards.map(function (block, index) {
            return <Card
              key={index}
              index={index}
              data={block}
              parentField={`${parentField}.cards`}
            />
          })
        )}
        {/* <div className="flex flex-col justify-center align-center pt-14">
          <p className={`text-center px-16 ${data.style?.labelStyles}`}>{ data.label }</p>
          <Buttons
            buttons={[
              {
                label: "Apply To Speak",
                link: "/",
                type: "primary"
              },
            ]}
            className={`mx-auto`}
            parentField={`${parentField}.buttons`}
          />
        </div> */}
      </div>
    </Section>
  );
};
