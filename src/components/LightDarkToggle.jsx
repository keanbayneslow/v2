import { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

/**
 * Represents a light/dark mode toggle button component.
 *
 * @component
 */

const LightDarkToggle = () => {
  // State to track the current mode (light or dark)
  const [islightMode, setLightMode] = useState(false);

  // Function to toggle between light and dark mode
  const toggleMode = () => {
    setLightMode(!islightMode);
  };

  // Original colors
  /*
    --bg-color: #131a22;
    --bg2-color: #232f3e19;
    --hl-color: #48a3c6;
    --hl2-color: #e47911;
    --text-color: #f3f3f3;
    --secondary-text-color: #999999;
    --grey: #9f9f9f76;
    --spacing: 50px;
    --sm-spacing: 30px;
      */

  // Apply the selected mode's colors using CSS custom properties
  useEffect(() => {
    const colors = !islightMode
      ? {
          // Dark Colors
          "--bg-color": "#131a22",
          "--bg2-color": "#191825",
          "--hl-color": "#03DAC5",
          "--hl2-color": "#ab20fd",
          "--text-color": "#BB86FC",
          "--secondary-text-color": "#fbf8fd",
          "--grey": "#ffffff",
        }
      : {
          // Light Colors
          "--bg-color": "#DDE8B7",
          "--bg2-color": "#CEDD94",
          "--hl-color": "#11d47d",
          "--hl2-color": "#75882b",
          "--text-color": "#FF9F1C",
          "--secondary-text-color": "#1A2821",
          "--grey": "#75882b",
        };

    for (const property in colors) {
      const value = colors[property];
      document.documentElement.style.setProperty(property, value);
    }
  }, [islightMode]);

  return (
    <button className="toggleMode" onClick={toggleMode}>
      {islightMode ? (
        <MdDarkMode className="toggleIcon" />
      ) : (
        <CiLight className="toggleIcon" />
      )}
    </button>
  );
};

export default LightDarkToggle;
