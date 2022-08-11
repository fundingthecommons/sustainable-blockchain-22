import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Section } from "../section";
import { Buttons } from "../buttons";

export const Video = ({ data, parentField = ""  }) => {
  
  return (
    <Section background={data.background} navigationLabel={data.navigationLabel}>
      <div className={`max-w-desktop-full mx-auto min-h-0 text-left ${data.style?.padding}`}>
        {data.label && <h1 className={data.style?.labelStyles} data-tinafield={`${parentField}.label`}>{data.label}</h1>}
        
        <div className="flex sm:flex-col-reverse">
          <div className="mr-auto pr-10 w-2/3 md:w-3/5 sm:w-full sm:p-0 sm:mt-12">
            <div className="relative w-full" style={{"paddingBottom": "56.25%"}}>
              <iframe src={ data.video } title="SBS EU" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen style={{position: "absolute", top: "0px", left: "0px", width: "100%", height: "100%"}}></iframe>
            </div>
          </div>
          <div className="mr-auto w-1/3 md:w-3/5 sm:w-full">
            <div className="text-left">
              {data.image?.src && (
                <img
                  className="mb-8"
                  alt={data.image?.alt}
                  src={data.image?.src}
                  data-tinafield={`${parentField}.image`}
                />
              )}
              {data.headline && <h2 className={data.style?.headlineStyles} data-tinafield={`${parentField}.headline`}>{data.headline}</h2>}
              {data.subhead && <h3 className={data.style?.subheadStyles} data-tinafield={`${parentField}.subhead`}>{data.subhead}</h3>}
              
              {data.body?.children && (
                <div className={data.style?.textStyles} data-tinafield={`${parentField}.body`}>
                  <TinaMarkdown content={data.body} />
                </div>
              )}
              {data.buttons && (
                <Buttons
                  buttons={data.buttons}
                  className={`flex-col items-start order-4`}
                  parentField={`${parentField}.buttons`}
                />
              )}
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
};
