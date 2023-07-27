import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "@/styles/animeDetail.styles";
import { GET_ANIME } from "@/stores/graphql";
import { BeatLoader } from "react-spinners";
import Button from "@/components/button/Button";
import {
  addAnime,
  getCollectionFormAnime,
  addCollection,
  initCollection,
} from "@/stores/collections";
import { RootState } from "@/stores/store";
import useSweetAlert from "@/hooks/useSweetAlert";
import Modal from "@/components/modal/Modal";
import ModalFormCollections from "@/components/modal/ModalForm";
import { motion } from "framer-motion";

const AnimeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  const { toast } = useSweetAlert();

  const { collections, selectedCollections } = useSelector(
    (state: RootState) => state.collections
  );

  const newCollections = collections.filter(
    (collection) =>
      !selectedCollections.some((selected) => collection.id === selected.id)
  );

  const { loading, error, data } = useQuery<PayloadAnime>(GET_ANIME, {
    variables: {
      id: Number(id),
    },
  });

  const description = data?.Media.description.split("<br><br>");

  const [showCollections, setShowCollections] = useState<boolean>(false);
  const [idCollections, setIdCollections] = useState<number[]>(
    selectedCollections.map((collections) => collections.id)
  );
  const [nameCollection, setNameCollection] = useState<string>("");

  const handleChangeId = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const isChecked = e.target.checked;

    if (isChecked) {
      setIdCollections((prevIdCollections) => [...prevIdCollections, id]);
    } else {
      setIdCollections((prevIdCollections) =>
        prevIdCollections.filter((collectionId) => collectionId !== id)
      );
    }
  };

  const handleFormAnime = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      idCollections
        .filter(
          (idCollection) =>
            !selectedCollections.some(
              (collection) => collection.id === idCollection
            )
        )
        .forEach((id) => {
          if (data)
            dispatch(addAnime({ idCollection: id, anime: data?.Media }));
        });
      data && data.Media && dispatch(getCollectionFormAnime(data?.Media.id));
      setShowCollections(false);
      toast("Anime Ditambahkan ke collection", "success");
    } catch (error) {
      toast(error as string, "error");
    }
  };

  const handleFormAddCollection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(addCollection(nameCollection));
      dispatch(initCollection());
      toast(`Menambahkan anime Ke ${nameCollection}`, "success");
    } catch (error) {
      toast(error as string, "error");
    }
  };

  useEffect(() => {
    setIdCollections(selectedCollections.map((collections) => collections.id));
  }, [selectedCollections.length]);

  useEffect(() => {
    if (data && data.Media) {
      dispatch(getCollectionFormAnime(data?.Media.id));
    }

    if (error) toast(error.message, "error");

    return () => {};
  }, [data, dispatch, error]);

  return (
    <section css={styles.section}>
      {loading ? (
        <div css={styles.loading}>
          <BeatLoader color="var(--color-primary)" />
        </div>
      ) : (
        <article css={styles.article}>
          <h1 css={styles.title}>{data?.Media.title.english}</h1>
          <img
            css={styles.banner}
            src={
              data?.Media.bannerImage
                ? data?.Media.bannerImage
                : "https://placeholder.co/800x200"
            }
            alt="Banner"
          />
          <div css={styles.content}>
            <motion.img
              src={data?.Media.coverImage.large}
              alt="cover"
              css={styles.image}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2, type: "tween" },
              }}
            />
            <motion.div
              css={styles.info}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>description : </p>
              {description &&
                description?.map((item, index) => (
                  <div key={index}>
                    <span>{item}</span>
                    <br />
                    {index + 1 !== description.length && <br />}
                  </div>
                ))}

              <p>
                released : <span>{data?.Media.seasonYear}</span>
              </p>
              <p>
                country : <span>{data?.Media.countryOfOrigin}</span>
              </p>
              <p css={styles.site}>
                site :{" "}
                <span
                  onClick={() => window.open(data?.Media.siteUrl, "_blank")}
                >
                  {data?.Media.siteUrl}
                </span>
              </p>

              <p css={styles.information}>
                genres :
                {data?.Media.genres.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>

              <p css={styles.information}>
                collection :{" "}
                {selectedCollections.map((collection, index) => (
                  <Button
                    size="lg"
                    key={index}
                    onClick={() =>
                      router.push({
                        pathname: "/collection/[cid]",
                        query: { cid: collection.id },
                        hash: collection.name,
                      })
                    }
                  >
                    {collection && collection.name}
                  </Button>
                ))}
              </p>
            </motion.div>
          </div>
          <div style={{ marginTop: "2rem" }}>
            <div css={styles.action}>
              <Button
                type="button"
                size="lg"
                useStyle={true}
                onClick={() => setShowCollections(true)}
              >
                Add to Collection
              </Button>
              {data?.Media.trailer && (
                <Button
                  type="button"
                  size="lg"
                  useStyle={true}
                  onClick={() =>
                    window.open(
                      `https://${data.Media.trailer.site}.com/watch?v=${data.Media.trailer.id}`,
                      "_blank"
                    )
                  }
                >
                  Open Trailler
                </Button>
              )}
            </div>
          </div>

          {newCollections.length ? (
            <Modal
              isOpen={showCollections}
              onClose={() => setShowCollections(false)}
              title="Tambahkan ke Collection"
            >
              <form css={styles.formCheckBox} onSubmit={handleFormAnime}>
                <ul css={styles.checkBoxWrapper}>
                  {newCollections.map((item, index) => {
                    return (
                      <li key={index}>
                        <p>{item.name}</p>
                        <input
                          type="checkbox"
                          name="collection"
                          onChange={(e) => handleChangeId(e, item.id)}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div css={styles.formButtonSubmit}>
                  <Button size="lg" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Modal>
          ) : (
            <ModalFormCollections
              isOpen={showCollections}
              onClose={() => setShowCollections(false)}
              title="Tambahkan Collection"
              value={nameCollection}
              onChange={(e) => setNameCollection(e.target.value)}
              onSubmit={handleFormAddCollection}
            />
          )}
        </article>
      )}
    </section>
  );
};

export default AnimeDetail;
