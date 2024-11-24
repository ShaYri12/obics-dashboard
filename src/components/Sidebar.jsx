import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({}); // For parent dropdowns
  const [nestedOpen, setNestedOpen] = useState({}); // For child four nested dropdown

  // Toggle parent section (like "Getting Started")
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Toggle nested dropdown inside "Child Four"
  const toggleNested = (section) => {
    setNestedOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const sidebarRef = useRef(null);

  const checkWidth = () => {
    if (window.innerWidth >= 1024) {
      setIsSmall(true);
    } else {
      setIsSmall(false);
    }
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      if (window.innerWidth < 1024) {
        setIsSmall(false);
      }
    }
  };

  useEffect(() => {
    // Check width on mount
    checkWidth();

    // Add event listener for window resize
    window.addEventListener("resize", checkWidth);

    // Add event listener for clicks outside the sidebar
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkWidth);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const dropdownItems = [
    {
      label: "Getting Started",
      subItems: [
        { childName: "Child One", Link: "/getting-started/child-one" },
        { childName: "Child Two", Link: "/getting-started/child-two" },
        { childName: "Child Three", Link: "/getting-started/child-three" },
        {
          label: "Child Four",
          subItems: [
            {
              childName: "Grand Child One",
              Link: "/getting-started/child-four/grand-child-one",
            },
            {
              childName: "Grand Child Two",
              Link: "/getting-started/child-four/grand-child-two",
            },
            {
              childName: "Grand Child Three",
              Link: "/getting-started/child-four/grand-child-three",
            },
            {
              childName: "Grand Child Four",
              Link: "/getting-started/child-four/grand-child-four",
            },
          ],
        },
      ],
    },
    {
      label: "Send Data to Obics",
      subItems: [
        { childName: "Sub-item 1", Link: "/send-data-to-obics/sub-item-1" },
        { childName: "Sub-item 2", Link: "/send-data-to-obics/sub-item-2" },
        { childName: "Sub-item 3", Link: "/send-data-to-obics/sub-item-3" },
      ],
    },
    {
      label: "Enhance",
      subItems: [
        { childName: "Sub-item 1", Link: "/enhance/sub-item-1" },
        { childName: "Sub-item 2", Link: "/enhance/sub-item-2" },
        { childName: "Sub-item 3", Link: "/enhance/sub-item-3" },
      ],
    },
    {
      label: "Observe",
      subItems: [
        { childName: "Sub-item 1", Link: "/observe/sub-item-1" },
        { childName: "Sub-item 2", Link: "/observe/sub-item-2" },
        { childName: "Sub-item 3", Link: "/observe/sub-item-3" },
      ],
    },
    {
      label: "Investigate",
      subItems: [
        { childName: "Sub-item 1", Link: "/investigate/sub-item-1" },
        { childName: "Sub-item 2", Link: "/investigate/sub-item-2" },
        { childName: "Sub-item 3", Link: "/investigate/sub-item-3" },
      ],
    },
    {
      label: "Notify",
      subItems: [
        { childName: "Sub-item 1", Link: "/notify/sub-item-1" },
        { childName: "Sub-item 2", Link: "/notify/sub-item-2" },
        { childName: "Sub-item 3", Link: "/notify/sub-item-3" },
      ],
    },
    {
      label: "Manage Data Volume",
      subItems: [
        { childName: "Sub-item 1", Link: "/manage-data-volume/sub-item-1" },
        { childName: "Sub-item 2", Link: "/manage-data-volume/sub-item-2" },
        { childName: "Sub-item 3", Link: "/manage-data-volume/sub-item-3" },
      ],
    },
    {
      label: "Integrations",
      subItems: [
        { childName: "Sub-item 1", Link: "/integrations/sub-item-1" },
        { childName: "Sub-item 2", Link: "/integrations/sub-item-2" },
        { childName: "Sub-item 3", Link: "/integrations/sub-item-3" },
      ],
    },
    {
      label: "Troubleshoot",
      subItems: [
        { childName: "Sub-item 1", Link: "/troubleshoot/sub-item-1" },
        { childName: "Sub-item 2", Link: "/troubleshoot/sub-item-2" },
        { childName: "Sub-item 3", Link: "/troubleshoot/sub-item-3" },
      ],
    },
    {
      label: "Security & Compliance",
      subItems: [
        { childName: "Sub-item 1", Link: "/security-compliance/sub-item-1" },
        { childName: "Sub-item 2", Link: "/security-compliance/sub-item-2" },
        { childName: "Sub-item 3", Link: "/security-compliance/sub-item-3" },
      ],
    },
    {
      label: "UI Reference",
      subItems: [
        { childName: "Sub-item 1", Link: "/ui-reference/sub-item-1" },
        { childName: "Sub-item 2", Link: "/ui-reference/sub-item-2" },
        { childName: "Sub-item 3", Link: "/ui-reference/sub-item-3" },
      ],
    },
  ];

  // Function to render a dropdown with nested subitems
  const renderDropdown = (section, subItems = [], isNested = false) => (
    <>
      <button
        className={`flex items-center justify-between w-full hover:text-black font-[500] text-black ${
          openSections[section] && !isNested ? "pb-2" : ""
        }`}
        onClick={() => {
          // For parent dropdown (open or close)
          if (!isNested) {
            toggleSection(section);
          }
          // For nested dropdown (Child Four and its grandchildren)
          else {
            toggleNested(section);
          }
        }}
      >
        <span>{section}</span>
        {openSections[section] && !isNested ? (
          <IoIosArrowDown className="text-[#CDCFD0] text-[18px]" />
        ) : (
          <IoIosArrowForward className="text-[#CDCFD0] text-[18px]" />
        )}
      </button>

      {/* Parent dropdown */}
      {openSections[section] && !isNested && subItems.length > 0 && (
        <ul className="text-grayish">
          {subItems.map((subItem, idx) => (
            <li key={idx}>
              {subItem.subItems && subItem.subItems.length > 0 ? (
                // Render button and dropdown for items with nested subitems
                <>
                  <button
                    className="w-full text-left flex justify-between items-center py-[9px] hover:text-black pl-4 text-[#443F3C] font-[500]"
                    onClick={() => toggleNested(subItem.label)} // Toggle dropdown
                  >
                    {subItem.label || subItem.childName}
                    {nestedOpen[subItem.label] ? (
                      <IoIosArrowDown className="text-[#CDCFD0] text-[18px]" />
                    ) : (
                      <IoIosArrowForward className="text-[#CDCFD0] text-[18px]" />
                    )}
                  </button>
                  {nestedOpen[subItem.label] && (
                    <ul className="pl-4 text-grayish">
                      {subItem.subItems.map((nestedItem, nestedIdx) => (
                        <li key={nestedIdx}>
                          <NavLink
                            to={nestedItem.Link}
                            className={({ isActive }) =>
                              `block hover:text-[#FF8039] pl-4 rounded-full py-[9px] ${
                                isActive
                                  ? "text-[#FF8039] font-[500] bg-[#F9E8DF]"
                                  : ""
                              }`
                            }
                          >
                            {nestedItem.childName}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Render NavLink for items without nested subitems
                <NavLink
                  to={subItem.Link}
                  className={({ isActive }) =>
                    `block hover:text-[#FF8039] pl-4 rounded-full py-[9px] ${
                      isActive ? "text-[#FF8039] font-[500] bg-[#F9E8DF]" : ""
                    }`
                  }
                >
                  {subItem.childName}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <>
      <div
        className={`${
          isSmall ? "hidden" : "flex"
        } fixed right-[10px] top-[8px] z-[22]`}
      >
        <button
          onClick={toggleSidebar}
          className="rounded-[15px] lg:px-[23px] px-[10px] py-[7.9px] mb-[30px] md:text-[20px] font-[500] leading-[24.2px]  transition"
        >
          {isDrawerOpen ? (
            <IoIosCloseCircle color="#000000" size={32} />
          ) : (
            <IoMenu color="#42454F" size={32} />
          )}
        </button>
      </div>
      <div
        className={`h-full lg:flex hidden sidebar-behind top-0 left-0 ${
          isSmall
            ? "xl:w-[300px] xl:min-w-[300px] w-[240px] min-w-[240px]"
            : "hidden"
        }`}
      ></div>

      <div
        ref={sidebarRef}
        className={`custom-scrollbar fixed top-0 bg-[#FAFBFB] h-screen overflow-y-auto border-r transition-all duration-200 lg:shadow-none shadow-md p-[20px] ${
          isSmall
            ? "xl:w-[300px] xl:min-w-[300px] w-[240px] min-w-[240px] left-0 z-[10]" // Left side for smaller screens
            : "max-w-[320px] w-full right-0 z-[20]" // Right side for larger screens
        } ${
          isDrawerOpen
            ? "lg:transalte-x-0 translate-x-0"
            : "lg:translate-x-0 translate-x-full"
        } transition-transform flex flex-col`}
      >
        {/* Search Bar */}
        <div className="relative flex items-center bg-[#EEEFEF] rounded-full mb-[20px] lg:mt-[85px] mt-[70px] h-[45.15px]">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <FiSearch className="text-[#B3B3B3] h-[20px] w-[20px]" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 pl-10 pr-4 rounded-full bg-[#EEEFEF] text-gray-500 placeholder-[#B3B3B3] focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>

        {/* Sidebar Items */}
        <ul className="space-y-[25px]">
          {dropdownItems.map((item, idx) => (
            <li key={idx}>{renderDropdown(item.label, item.subItems)}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
