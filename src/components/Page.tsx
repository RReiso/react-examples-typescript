import { MouseEvent } from "react";
import { useThemeContext } from "../context/ThemeContext";

const Page = () => {
  const { dark, toggleDark } = useThemeContext();
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toggleDark();
  };
  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  );
};

export default Page;
