import React, { useState } from "react";
import { Content } from "../content";
import { Section } from "../section";

const Timeline = ({ schedule, isActive, index, parentField = ""  }) => {
  const activeClass = !isActive ? 'hidden sm:block' : ''
  return (
    <div className={`timeline ${activeClass}`}>
      <h3 className="text-accent2 font-bold text-lg leading-5">{schedule.headline}</h3>
      <div className="text-accent2 mb-6">{schedule.subhead}</div>
      {schedule.events && (
        <div className="relative">
          <div className="absolute top-2 left-16 border-accent2 -ml-px border-l-2 border-dashed h-full w-px sm:hidden"></div>
          { schedule.events.map(function (event, index) {
            return <div key={index}>
              <div className="flex sm:block gap-8 text-accent2 text-md font-bold">
                <div className="relative w-12 text-right sm:inline-block sm:w-auto sm:text-center sm:text-xs sm:rounded sm:border-2 sm:border-accent2 sm:px-1 sm:mb-2">
                  {event.time}
                  <div className="bg-accent1 border-2 w-2 h-2 absolute top-1.5 -right-5 sm:hidden"></div>
                </div>
                <div className="w-full flex-1 sm:mb-1">{event.headline}</div>
              </div>
              <div className="pl-20 text-md mb-6 sm:pl-0">{event.subhead}</div>
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
    <Section className="max-w-desktop-full mx-auto px-20 py-20 sm:px-6" background={data.background} navigationLabel={data.navigationLabel}>
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
        <div className="grid grid-cols-2 gap-16 sm:gap-12">
          <div className="absolute top-40 bottom-20 left-1/2 border-l-2 border-dashed hidden sm:block"></div>
          { data.schedules.map(function (schedule, index) {
            return (
              <Timeline schedule={schedule} isActive={true} index={index} />
            )
          })}
        </div>
      )}
    </Section>
  );
};
