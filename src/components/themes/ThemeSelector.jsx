import React from "react";
import Image from "next/image";
import { ThemeContext } from "@/components/Themes/ThemeContext";

export const ThemeSelector = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const changeTheme = (colourLabel) => {
    setTheme(colourLabel);
    localStorage.setItem("theme", colourLabel);
  };

  const colourSquare = (colour, colourLabel) => (
    <div onClick={() => changeTheme(colourLabel)}>
      <Image
        className="h-32 w-32"
        width="100"
        height="100"
        // src={colour}
        src={"/assests/theme-" + colour + ".png"}
        aria-label={colourLabel}
        alt={colourLabel}
      />
    </div>
  );

  return (
    <div className="top-20 flex flex-row justify-around">
      {colourSquare("grass", "theme-grass")}
      {colourSquare("autumn", "theme-autumn")}
      {colourSquare("blue", "theme-blue")}
      {colourSquare("moody", "theme-moody")}
      {colourSquare("dark", "theme-dark")}
      {colourSquare("white", "theme-white")}
      {colourSquare("gold", "theme-gold")}
      {colourSquare("monzo", "theme-monzo")}
      {colourSquare("swapshop", "theme-swapshop")}
      {colourSquare("red", "theme-red")}
    </div>
  );

  // export async function getStaticProps({  params,}) {
  // export async function getServerSideProps({  params,}) {
  //     const image = await getImages() // fetch your data;
  //     const imageDynamic = image[param.id] //pass the prop from the url

  //     return { props: { image : imageDynamic || null } };
  // }
};
