import { useEffect, useRef, useState } from "react";

/**
 * This function listens for where the user clicked on the page
 * amd determines whether to toggle the dropdown menu
 */
const useClickOutsideToggle = () => {
  // sets the state of the dropdown meny
  const [expanded, setExpanded] = useState(false);

  // Reference for the dropdown menu, defaults to null
  const ref = useRef(null);

  useEffect(() => {
    /**
     * This function listens for clicks that are outside
     * of the dropdown menu. Sets the state of the dropdown
     * menu accordingly.
     */
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [ref]);

  return { expanded, setExpanded, ref };
};

export default useClickOutsideToggle;