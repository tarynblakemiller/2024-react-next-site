import React from "react";
import dropdownStyles from "./DropDownStyles.module.css";

interface DropdownContainerProps {
  children?: React.ReactNode;
  title: string;
  items?: string[];
  $isOpen: boolean;
  toggleDropdown: () => void;
  style?: React.CSSProperties;
}

export const renderItemList = (items: string[]) => {
  return items.map((item, index) => <li key={index}>{item}</li>);
};

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  children,
  title,
  items,
  $isOpen,
  style,
  toggleDropdown,
}) => {
  return (
    <div className={`${dropdownStyles.borderWrapper}`}>
      {/* <div className={`${dropDownStyles.borderWrapper}`} $customStyle={style}> */}
      <div
        className={dropdownStyles.dropdownContainerWrapper}
        onClick={toggleDropdown}
      >
        {/* <div
        className={dropDownStyles.dropdownContainerWrapper}
        $isOpen={$isOpen}
        onClick={toggleDropdown}
      > */}
        <span>{title}</span>
        <div className={`${dropdownStyles.arrowIcon}`}>
          {$isOpen ? "-" : "+"}
        </div>
      </div>
      {$isOpen && (
        <div className={`${dropdownStyles.ItemList}`}>
          {items ? renderItemList(items) : children}
        </div>
      )}
    </div>
  );
};

export default DropdownContainer;
