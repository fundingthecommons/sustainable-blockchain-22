import React from "react";
import type { Pages, Global } from "../.tina/__generated__/types";
import { Cards } from "./blocks/cards";
import { Feature } from "./blocks/feature";
import { Banner } from "./blocks/banner";
import { Embed } from "./blocks/embed";
import { TailwindFeature } from "./blocks/tailwind-feature";
import { TailwindCards } from "./blocks/tailwind-cards";
import { Hero } from "./blocks/hero";
import { SpeakerCards } from "./blocks/speaker-cards";
import { Schedule } from "./blocks/schedule";
import { Video } from "./blocks/video";
import { Rule } from "./blocks/rule";

export const Blocks = (props: Pages | Global) => {
  return (
    <>
      {props.blocks
        ? props.blocks.map(function (block, i) {
            switch (block.__typename) {
              case "PagesBlocksFeature":
              case "GlobalBlocksFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Feature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksBanner":
              case "GlobalBlocksBanner":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Banner data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksPhotoCards":
              case "GlobalBlocksPhotoCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTextCards":
              case "GlobalBlocksTextCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Cards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksEmbed":
              case "GlobalBlocksEmbed":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Embed data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindFeature":
              case "GlobalBlocksTailwindFeature":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindFeature data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksTailwindCards":
              case "GlobalBlocksTailwindCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <TailwindCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksSpeakerCards":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <SpeakerCards data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksSchedule":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Schedule data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksHero":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Hero data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksVideo":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Video data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              case "PagesBlocksRule":
                return (
                  <div data-tinafield={`blocks.${i}`} key={i + block.__typename}>
                    <Rule data={block} parentField={`blocks.${i}`} />
                  </div>
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};
