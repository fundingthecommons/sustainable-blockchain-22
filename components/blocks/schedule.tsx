import React, { useState } from "react";
import { Content } from "../content";
import { Section } from "../section";

const Timeline = ({ schedule, isActive, index, parentField = ""  }) => {
  const activeClass = !isActive ? 'hidden sm:block' : ''
  return (
    <div className={`timeline ${activeClass}`}>
      <h3 className="text-primary font-bold text-lg leading-5">{schedule.headline}</h3>
      <div className="text-primary mb-6">{schedule.subhead}</div>
      {schedule.events && (
        <div className="relative">
          <div className="absolute top-2 left-16 border-primary -ml-px border-l-2 border-dashed h-full w-px"></div>
          { schedule.events.map(function (event, index) {
            return <div key={index}>
              <div className="flex gap-8 text-primary text-xs font-bold">
                <div className="relative w-12 text-right">
                  {event.time}
                  <div className="bg-accent4 border-2 w-2 h-2 absolute top-1.5 -right-5"></div>
                </div>
                <div className="w-full flex-1">{event.headline}</div>
              </div>
              <div className="pl-20 text-xs mb-6">{event.subhead}</div>
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export const Schedule = ({ data, parentField = "" }) => {
  const [active, setActive] = useState(0);

  return (
    <Section className="max-w-desktop-full mx-auto px-20 py-20 sm:px-10" background={data.background} navigationLabel={data.navigationLabel}>
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
      {data.schedules && (
        <div className="flex gap-16 bg-accent4 p-8 pl-0 sm:pl-8">
          <div className="w-60 sm:hidden">
            { data.schedules.map(function (schedule, index) {
              const backgroundClasses = index === active ? 'bg-primary text-white' : ''
              return (
                <a className={`block text-primary cursor-pointer mb-2 p-2 pl-8 ${backgroundClasses}`} key={index} onClick={ () => setActive(index) }>
                  <div className="text-md font-bold">{schedule.headline}</div>
                  <div className="text-xs">{schedule.subhead}</div>
                </a>
              )
            })}
          </div>
          <div className="w-full flex-1 pt-3">
            { data.schedules.map(function (schedule, index) {
              return <Timeline schedule={schedule} isActive={active === index} index={index} />
            })}
          </div>
        </div>
      )}
    </Section>
  );
};
