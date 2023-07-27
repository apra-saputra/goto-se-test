import {
  IconDefinition,
  faHome,
  faBookOpenReader,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";

type ListMenuType = {
  name: string;
  path: string;
  icon: IconDefinition;
};

export const LISTMENU: ListMenuType[] = [
  {
    name: "Anime",
    path: "/anime",
    icon: faBookOpenReader,
  },
  {
    name: "Collection",
    path: "/collection",
    icon: faBookBookmark,
  },
];
