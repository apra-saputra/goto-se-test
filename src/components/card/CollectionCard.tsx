import { useState } from "react";
import { useRouter } from "next/router";
import { collectionStyles } from "./card.styles";
import ModalOption from "../modal/ModalOption";
import { motion } from "framer-motion";

type CollectionCardProps = {
  item: Collection;
  setEdit: (name: string) => void;
  deleteItem: (params: number) => void;
};

type ImageCardProps = {
  src?: string;
};

const CollectionCard = ({ item, setEdit, deleteItem }: CollectionCardProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <li css={collectionStyles.card}>
      <div
        css={collectionStyles.wrapper}
        onClick={() =>
          router.push({
            pathname: `collection/[cid]`,
            query: { cid: item.id },
            hash: item.name,
          })
        }
      >
        <h2 css={collectionStyles.title}>{item.name}</h2>
        <div>
          {item.animes.length ? (
            <ImageCard src={item.animes[0].coverImage.large} />
          ) : (
            <ImageCard src="https://placeholder.co/200x300" />
          )}
        </div>
      </div>

      <ModalOption isOpen={isOpen} setIsOpen={setIsOpen}>
        <li onClick={() => setEdit(item.name)}>Edit</li>
        <li onClick={() => deleteItem(item.id)}>Delete</li>
      </ModalOption>
    </li>
  );
};

export default CollectionCard;

const ImageCard = ({ src }: ImageCardProps) => {
  return (
    <motion.img
      initial={{ opacity: 0, rotate: "0deg" }}
      animate={{
        opacity: 1,
        rotate: "10deg",
        transition: { delay: 0.3 },
      }}
      css={collectionStyles.image}
      src={src}
      alt="cover"
    />
  );
};
