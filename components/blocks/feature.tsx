import * as React from "react";
import { Section } from "../section";
import { Content } from "../content";

/* Return the string with any word containing the substring removed */
const removeSubstring = (value: string, substring: string) => {
  return value?.split(" ").filter(item => item.indexOf(substring) === -1).join(" ") || ""
}
/* Return the first word containing the substring */
const getSubstring = (value: string, substring: string) => {
  const match = value?.split(" ").find(item => item.includes(substring))
  return match
}

const getContainerMargin = (alignment) => {
  const isHorizontal = alignment?.split(' ')?.includes('flex-rwo', 'flex-row-reverse')
  const isFlipped = alignment?.split(' ')?.includes('flex-row')
  if (isHorizontal) {
    return isFlipped ? "ml-auto" : "mr-auto"
  }
  return ""
}

const contentClasses = (data) => {
  const widthClass: string = data.style?.featureContent?.split(" ").find(item => item.includes("w-"))
  const contentToEdge: boolean  = data.style?.featureContent?.split(" ").find(item => item === "to-edge")
  const imageToEdge: boolean = data.style?.featureImage?.split(" ").find(item => item === "to-edge")
  const alignmentClasses: string[] = data?.style?.alignment?.split(" ") || []
  const vertical: boolean = alignmentClasses.some(item => ["flex-col", "flex-col-reverse"].includes(item))
  const leftImage = alignmentClasses.includes('flex-row')
  
  // Width classes
  let widthClasses = ""
  if (vertical) {
    widthClasses = `max-100 w-full`
  } else if (contentToEdge && imageToEdge) {
    widthClasses = `${widthClass}`
  } else if (!contentToEdge && !imageToEdge) {
    widthClasses = `${widthClass} max-${widthClass}`
  } else if (!contentToEdge && imageToEdge) {
    widthClasses = `${widthClass} max-${widthClass}`
  } else if (contentToEdge && !imageToEdge) {
    widthClasses = `flex-1`
  }

  // Margin classes
  let marginClasses = ""
  if (vertical) {
    marginClasses = `mx-auto`
  } else if (!contentToEdge) {
    marginClasses = leftImage ? `mr-edge md:mr-0` : `ml-edge md:ml-0`
  }

  const paddingClasses = data.style?.padding

  return `sm:w-full border ${paddingClasses} ${widthClasses} ${marginClasses}`
}

const imageClasses = (data) => {
  const featureContent: string[] = data.style?.featureContent?.split(" ") || []
  const featureImage: string[] = data.style?.featureImage?.split(" ") || []
  const alignment: string[] = data.style?.alignment?.split(" ") || []
  const contentWidthClass: string = featureContent.find(item => item.includes("w-"))
  const contentToEdge: boolean  = featureContent.includes("to-edge")
  const imageToEdge: boolean = featureImage.includes("to-edge")
  const vertical: boolean = alignment.some(item => ["flex-col", "flex-col-reverse"].includes(item))
  const shouldStretch: boolean = featureImage.some(item => ["object-cover", "object-contain"].includes(item))
  const leftImage:boolean = alignment.includes('flex-row')
  const inverseWidths = {
    "w-1/5": "w-4/5",
    "w-1/4": "w-3/4",
    "w-1/3": "w-2/3",
    "w-1/2": "w-1/2",
    "w-2/3": "w-1/3",
    "w-3/4": "w-1/4",
    "w-4/5": "w-1/5",
  }

  // Width classes
  let widthClasses = ""
  if (vertical) {
    widthClasses = `${inverseWidths[contentWidthClass]}`
  } else if (contentToEdge && imageToEdge) {
    widthClasses = `flex-1`
  } else if (!contentToEdge && !imageToEdge) {
    widthClasses = `${inverseWidths[contentWidthClass]}`
  } else if (!contentToEdge && imageToEdge) {
    widthClasses = `flex-1`
  } else if (contentToEdge && !imageToEdge) {
    widthClasses = `${inverseWidths[contentWidthClass]} max-${inverseWidths[contentWidthClass]}`
  }
  
  // Margin classes
  let marginClasses = ""
  if (vertical) {
    marginClasses = `mx-auto`
  } else if (!imageToEdge) {
    marginClasses = leftImage ? `ml-edge lg:ml-0` : `mr-edge lg:mr-0`
  }
  
  const padding = data.style?.imagePadding
  const stretch = shouldStretch ? "self-stretch" : ""

  return `sm:w-full relative border lg:border-4 ${padding} ${stretch} ${widthClasses} ${marginClasses}`
}

const imgClasses = (data) => {
  const stretchStates = ["object-cover", "object-contain"]
  const shouldStretch = stretchStates.some(item => data.style?.featureImage?.includes(item));
  const height = shouldStretch ? "absolute inset-0 h-full" : ""
  const classes = removeSubstring(data.style.featureImage, "to-edge")
  return `w-full ${height} ${classes}`;
};

export const Feature = ({ data, parentField = "" }) => {
  const minHeight = data.style?.featureContent?.split(" ").find(item => item.includes("min-h-"))
  return (
    <Section
      background={data.background}
      navigationLabel={data.navigationLabel}
    >
      <div className={`relative flex sm:flex-col ${data.style?.alignment} ${minHeight} border`}>
        <div className={imageClasses(data)}>
          {data.image?.src && (
            <img
              className={`${imgClasses(data)}`}
              alt={data.image?.alt}
              src={data.image?.src}
              data-tinafield={`${parentField}.image`}
            />
          )}
        </div>
        <div className={contentClasses(data)}>
          <div>
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
          </div>
        </div>
      </div>
    </Section>
  );
};
