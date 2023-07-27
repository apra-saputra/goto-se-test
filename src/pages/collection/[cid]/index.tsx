import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styles } from "@/styles/detailCollections.styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/stores/store";
import {
  getCollection,
  removeAnime,
  updateCollectionName,
} from "@/stores/collections/index";
import AnimeCard from "@/components/card/AnimeCard";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import useSweetAlert from "@/hooks/useSweetAlert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import ModalForm from "@/components/modal/ModalForm";

const DetailCollection = () => {
  const router = useRouter();
  const { cid } = router.query;
  const dispatch = useDispatch();

  const { collection } = useSelector((state: RootState) => state.collections);
  const { confirmBox, toast } = useSweetAlert();

  const [loading, setLoading] = useState<boolean>(true);
  const [nameCollection, setNameCollection] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleConfrim = (item: MediaType) => {
    confirmBox(
      `Hapus ${item.title.english} ?`,
      "Hapus",
      "Batalkan",
      () => (
        dispatch(
          removeAnime({ idAnime: item.id, idCollection: collection.id })
        ),
        setLoading(true)
      )
    );
  };

  const handleSubmitEditName = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(
        updateCollectionName({ id: collection.id, name: nameCollection })
      );
      setLoading(true);
      setIsEdit(false);
      toast("Nama Collections telah diganti", "success");
    } catch (error) {
      toast(error as string, "error");
    }
  };

  useEffect(() => {
    if (cid) {
      dispatch(getCollection(Number(cid)));
      const delayLoading = setTimeout(() => {
        setLoading(false);
      }, 1000);
      setNameCollection(collection.name);
      return () => {
        clearTimeout(delayLoading);
      };
    }
  }, [cid, dispatch, loading, collection.name]);

  return (
    <section css={styles.section}>
      <div css={styles.subSection}>
        <h1
          css={css({
            padding: ".5rem 0",
            borderBottom: ".25rem solid var(--accent-secondary)",
            marginBottom: "1rem",
            cursor: "default",
            "& svg": {
              cursor: "pointer",
              "&:hover": {
                color: "var(--accent-secondary)",
              },
            },
          })}
        >
          {collection?.name}{" "}
          <FontAwesomeIcon icon={faPencil} onClick={() => setIsEdit(true)} />
        </h1>

        <ul css={loading ? styles.conatainerLoading : styles.container}>
          {loading ? (
            <BeatLoader color="var(--color-primary)" />
          ) : collection.animes.length ? (
            collection.animes.map((anime, index) => (
              <li
                key={index}
                css={css({
                  position: "relative",
                  zIndex: 1,
                })}
              >
                <AnimeCard item={anime} confirmDelete={handleConfrim} />
              </li>
            ))
          ) : (
            <li
              style={{
                padding: "1rem",
                height: "20rem",
                backgroundColor: "var(--color-primary)",
                borderRadius: ".5rem",
              }}
            >
              <div
                css={css({
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "& p": {
                    fontWeight: "600",
                  },
                })}
              >
                <p>Anda Belum Memasukan Anime ke Collection</p>
              </div>
            </li>
          )}
        </ul>

        <ModalForm
          isOpen={isEdit}
          value={nameCollection}
          onChange={(e) => setNameCollection(e.target.value)}
          onClose={() => (setIsEdit(false), setNameCollection(""))}
          onSubmit={handleSubmitEditName}
          title="Edit Nama Collections"
        />
      </div>
    </section>
  );
};

export default DetailCollection;
