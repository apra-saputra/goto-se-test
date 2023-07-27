import { useState } from "react";
import { styles } from "@/styles/collection.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import CollectionCard from "@/components/card/CollectionCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/stores/store";
import {
  addCollection,
  deleteCollection,
  updateCollectionName,
} from "@/stores/collections";
import useSweetAlert from "@/hooks/useSweetAlert";
import ModalForm from "@/components/modal/ModalForm";

const Collection = () => {
  const dispatch = useDispatch();
  const { collections } = useSelector((state: RootState) => state.collections);

  const { toast, confirmBox } = useSweetAlert();

  const [showEdit, setShowEdit] = useState<boolean>(false);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [nameCollection, setNameCollection] = useState<string>("");
  const [idCollection, setIdCollection] = useState<number>(0);

  const handleCloseModal = (param: boolean) => {
    setShowAdd(param);
    setShowEdit(param);
  };

  const handleFormAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(addCollection(nameCollection));
      handleCloseModal(false);
      setNameCollection("");
      toast("Sukses Collection Ditambahkan", "success");
    } catch (error) {
      toast(error as string, "error");
    }
  };

  const handleDeleteForm = (id: number) => {
    try {
      confirmBox(
        "Hapus Collection",
        "Hapus Collections",
        "Batalkan",
        () => (
          dispatch(deleteCollection(id)),
          toast("Sukses menghapus Collection", "success")
        )
      );
    } catch (error) {
      toast(error as string, "error");
    }
  };

  const TakeCollectionForEdit = (name: string) => {
    setShowEdit(true);
    const collection = collections.find((item) => item.name === name);

    collection &&
      (setNameCollection(collection?.name), setIdCollection(collection.id));
  };

  const handleFormEdit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(
        updateCollectionName({ id: idCollection, name: nameCollection })
      );
      toast("Sukses Ganti Nama Collections", "success");
      setShowEdit(false);
    } catch (error) {
      toast(error as string, "error");
    }
  };

  return (
    <section css={styles.section}>
      <div css={styles.subSection}>
        <div css={styles.header}>
          <h1>My Collection</h1>
        </div>

        <ul css={styles.container}>
          <li css={styles.cardAdd} onClick={() => setShowAdd(true)}>
            <FontAwesomeIcon
              icon={faPlusCircle}
              size="4x"
              color="var(--accent-primary)"
            />
          </li>
          {collections.map((item, index) => (
            <CollectionCard
              key={index}
              item={item}
              setEdit={TakeCollectionForEdit}
              deleteItem={handleDeleteForm}
            />
          ))}
        </ul>
        <ModalForm
          isOpen={showEdit || showAdd}
          onClose={() => (handleCloseModal(false), setNameCollection(""))}
          title={
            showAdd
              ? "Tambah Collections"
              : showEdit
              ? "Edit Collections"
              : "Hapus Collections"
          }
          onChange={(e) => setNameCollection(e.target.value)}
          onSubmit={showEdit ? handleFormEdit : handleFormAdd}
          value={nameCollection}
        />
      </div>
    </section>
  );
};

export default Collection;
