import * as React from "react";
import { Content } from "../content";
import { Section } from "../section";
import { TinaMarkdown } from "tinacms/dist/rich-text";

const Card = ({ data, index, parentField = ""  }) => {
  return (
    <div className="relative" data-tinafield={`${parentField}.${index}`}>
      <div className="absolute -top-4 -bottom-4 left-20 right-0 -z-1 bg-accent4"></div>
      <svg className="absolute -right-1.5 bottom-0" width="50" height="68" viewBox="0 0 50 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.1652 0.140381V40.0357L11.8837 55.1464L10.483 52.82C10.371 52.633 10.2095 52.4776 10.015 52.3696C9.82038 52.2616 9.59955 52.2047 9.37474 52.2047C9.14994 52.2047 8.92909 52.2616 8.73452 52.3696C8.53994 52.4776 8.37852 52.633 8.26651 52.82L0.525241 65.695C0.412145 65.8815 0.352347 66.0934 0.351871 66.3091C0.351394 66.5249 0.410231 66.737 0.522502 66.9239C0.634773 67.1109 0.796499 67.2661 0.991298 67.3739C1.1861 67.4817 1.40709 67.5383 1.63198 67.538H17.1219C17.3468 67.5383 17.5679 67.4817 17.7627 67.3739C17.9575 67.2661 18.1191 67.1109 18.2314 66.9239C18.3437 66.737 18.4026 66.5249 18.4021 66.3091C18.4016 66.0934 18.3418 65.8815 18.2287 65.695L16.8988 63.4821L44.9516 47.9433C46.2397 47.2265 47.3093 46.1982 48.0537 44.9609C48.7981 43.7236 49.1912 42.3206 49.1939 40.892V0.140381H39.1652Z" fill="#51B848"/>
      </svg>
      <div className="flex items-center">
        {data.imageSrc && (
          <img
            alt={data.speakerName}
            src={data.imageSrc}
            className="w-40 h-40 absolute rounded-full object-cover"
            data-tinafield={`${parentField}.${index}.image`}
          />
        )}
        <div className="p-8 pl-48" >
          {data.label && (
            <p
              className="text-sm text-accent2 mb-2"
              data-tinafield={`${parentField}.${index}.label`}
            >{data.label}</p>
          )}
          {data.speaker && (
            <h3
              className="text-lg font-bold text-primary mb-8"
              data-tinafield={`${parentField}.${index}.speaker`}
            >{data.speaker}</h3>
          )}
          {data.company && (
            <h4
              className="text-sm text-accent2"
              data-tinafield={`${parentField}.${index}.company`}
            >{data.company}</h4>
          )}
          {data.title && (
            <h5
              className="text-sm text-accent2 "
              data-tinafield={`${parentField}.${index}.title`}
            >{data.title}</h5>
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
      {/* <div className="">
        {data.headline && <h2 className="font-bold font-display2 text-xl uppercase text-center text-white mb-8" data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
      </div> */}
      <Content
        label = {data.label}
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
      <div className="speaker-cards grid grid-cols-2 gap-16 sm:grid-cols-1">
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
      </div>
    </Section>
  );
};
