import React, { useState, useRef, useEffect } from "react";
import * as ga from '../lib/ga'
import { isString, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const navList = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const linkTarget = (link) => {
  const isExternalLink = isString(link) && (link.includes("http://") || link.includes("https://"))
  return isExternalLink ? '_blank' : ''
}

const Dropdown = ({item}) => {
  const ref = useRef(null);
  const [ isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ isOpen ]);

  return (
    <div className="relative inline-block" ref={ref}>
      <a className="block no-underline cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
        {item.label}
        <svg className="relative inline-block w-4 h-4 ml-2 -top-px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/>
        </svg>
      </a>
      {isOpen && (
        <div className="pt-2">
          <ul className="absolute right-0 bg-primary">
            {item.subNavItems.map(function (subItem, index) {
              return (
                <li className="block" key={index}>
                  <a className={"block no-underline whitespace-nowrap px-4 py-1"} href={subItem.link} target={linkTarget(subItem.link)} onClick={() => setIsOpen(!isOpen)}>{subItem.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export const Header = ({
  blocks,
  globalData
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const pageJump = (label) => {
    setNavOpen(!navOpen)
    ga.event({
      action: "page_jump",
      params : {
        jump_label: label
      }
    })
  }

  const nav = globalData.nav
  const navItems = nav?.navItems || []
  const sectionClasses = navOpen ? "sm:h-screen" : "sm:h-10";
  const navClasses = navOpen ? "sm:opacity-100 m-0" : "sm:opacity-0 sm:pointer-events-none";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
  const navStyles = { 
    transition: "opacity .4s, margin .3s",
  }
  const backgroundStyles = { 
    transition: "opacity .4s ease-out",
  }
  const linkStyles = navOpen ? { 
    lineHeight: "4rem",
    transition: "line-height .4s"
  } : {
    lineHeight: "6rem",
    transition: "line-height .4s"
  }
  const logoStyles = { 
    marginRight: `${globalData.logo.imageMargin}px`
  }

  function Logo(props) {
    const hasLogoImage = globalData.logo?.image;
    if (hasLogoImage) {
      return (
        <img className={props.className} src={globalData.logo?.image} width={globalData.logo?.imageWidth} height={globalData.logo?.imageHeight} style={logoStyles} alt={globalData.logo?.logoType || "logo"} />
      );
    }
    return (
      <h1 className={`flex-none ${props.className} ${globalData.logo?.logoTypeStyle}`} style={logoStyles}>{globalData.logo?.logoType}</h1>
    );
  }

  
  return (
    <section className="relative">
      <div className={`${sectionClasses} sm:hidden sm:h-screen absolute z-40 top-0 left-0 right-0`}>
        <div style={backgroundStyles} className={`${backgroundClasses} ${nav.navBackgroundColor} transition duration-400 absolute inset-0 -z-1 hidden sm:block`}></div>
        <div className={`max-w-desktop-full mx-auto ${nav?.padding}`}>
          
          {/* Desktop Nav */}
          <div className="flex items-center sm:hidden">
            <Logo className="flex-none" />
            <ul style={navStyles} className={`${nav.navTypeStyle} ${nav.navAlignment} flex-grow list-none sm:hidden`}>

              {/* Page Jumps */}
              {navList(blocks)?.map(function (item, index) {
                return (
                  <li className="inline-block ml-8 first:ml-0" key={index}>
                    <a className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                  </li>
                )
              })}

              {/* Nav Items */}
              {navItems && navItems.map(function (item, index) {
                const subNavItems = item.subNavItems || null

                if (subNavItems) {
                  return (
                    <li className="relative inline-block ml-8">
                      <Dropdown item={item} />
                    </li>
                  )
                } else {
                  return (
                    <li className="inline-block ml-8" key={index}>
                      <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} >{item.label}</a>
                    </li>
                  )
                }
              })}
            </ul>
          </div>

          {/* Mobile Nav */}
          <Logo className={`absolute top-4 left-4 hidden`} />
          <div className="absolute top-0 p-4 right-0 hidden" onClick={() => setNavOpen(!navOpen)}>
            <Burger color="white" isOpen={navOpen}  />
          </div>
          <ul style={navStyles} className={`${navClasses} ${nav.navTypeStyle} ${nav.navAlignment} flex-grow list-none hidden sm:block mt-16`}>
            {navList(blocks)?.map(function (item, index) {
              return (
                <li className="block" key={index}>
                  <div className={`bg-white h-px opacity-25`} />
                  <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                </li>
              )
            })}
            {navItems && navItems.map(function (item, index) {
              return (
                <li className="block" key={index}>
                  <div className={`bg-white h-px opacity-25`} />
                  <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    </section>
  );
};
