import React, { Children, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../Value/Value.css";
// Demo styles, see 'Styles' section below for some notes on use.

const InpuutContent = ({ children }) => {
  const [className, setClassName] = useState(0);
  return (
    <section id="value" className="v-wrapper p-2 my-4">
      {children}
    </section>
  );
};

export default InpuutContent;
