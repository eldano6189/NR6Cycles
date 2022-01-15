import { Race } from "../Products/Race";
import { Performance } from "../Products/Performance";
import { MTB } from "../Products/MTB";
import { Gravel } from "../Products/Gravel";
import { Track } from "../Products/Track";
import { CycleX } from "../Products/CycleX";

export const Products = [
  {
    img: "Race.jpg",
    name: "RACE",
    link: "/products",
    passInfo: Race,
  },
  {
    img: "Performance.jpg",
    name: "PERFORMANCE",
    link: "/products",
    passInfo: Performance,
  },
  {
    img: "MTB.jpg",
    name: "MTB",
    link: "/products",
    passInfo: MTB,
  },
  {
    img: "Gravel.jpg",
    name: "GRAVEL",
    link: "/products",
    passInfo: Gravel,
  },
  {
    img: "ComingSoon.jpg",
    name: "CYCLE X",
    link: "/",
    passInfo: CycleX,
  },
  {
    img: "ComingSoon.jpg",
    name: "TRACK",
    link: "/",
    passInfo: Track,
  },
];
