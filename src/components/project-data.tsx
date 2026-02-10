import monarch from "../assets/monarch.jpg";
import hellonearth from "../assets/hellonearth.png";
import alexmoraisbass from "../assets/bass.avif";
import stevetearl from "../assets/steve.avif";
import reeldock from "../assets/reeldock.avif";
import foodi3 from "../assets/foodi3.jpg";
import velvetbrew from "../assets/velvetbrew.jpg";

export interface SlideData {
  title: string;
  button: string;
  src: string;
  url: string;
}

export const Foodi3: SlideData = {
  title: "Foodi3",
  button: "Explore",
  src: foodi3,
  url: "https://foodi3.appwrite.network/auth",
};

export const VelvetBrew: SlideData = {
  title: "Velvet Brew",
  button: "Explore",
  src: velvetbrew,
  url: "https://velvet-brew-landing.vercel.app/",
};

export const MonarchCocktailBar: SlideData = {
  title: "Monarch Cocktail Bar",
  button: "Explore",
  src: monarch,
  url: "https://the-monarch-cocktail-bar.vercel.app/",
};

export const SteveTearle: SlideData = {
  title: "Steve Tearle Portfolio App",
  button: "Explore",
  src: stevetearl,
  url: "https://stevetearle.com/",
};

export const HellOnEarth: SlideData = {
  title: "Hell on Earth Game",
  button: "Explore",
  src: hellonearth,
  url: "https://hell-on-earth.netlify.app/",
};

export const AlexMoraisBass: SlideData = {
  title: "Alex Morais Bass",
  button: "Explore",
  src: alexmoraisbass,
  url: "https://alexmoraisbass.netlify.app/",
};

export const ReelDock: SlideData = {
  title: "ReelDock",
  button: "Explore",
  src: reeldock,
  url: "https://reeldock.netlify.app/",
};
