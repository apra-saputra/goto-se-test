import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type initialStateType = {
  collections: Collection[];
  selectedCollections: Collection[];
  collection: Collection;
  error: any;
};

const initialState: initialStateType = {
  collections: [],
  selectedCollections: [],
  collection: { id: 0, name: "", animes: [] },
  error: "",
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    initCollection: (state) => {
      const storedCollections = localStorage.getItem("collections");
      if (storedCollections) {
        state.collections = JSON.parse(storedCollections) as Collection[];
      }
    },
    catchError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    getCollection: (state, action: PayloadAction<number>) => {
      const payload = state.collections.find(
        (collection) => collection.id === action.payload
      );
      if (payload) {
        state.collection = { ...payload };
      }
    },

    // action
    addCollection: (state, action: PayloadAction<string>) => {
      try {
        const newName = validateName(action.payload.trim(), state.collections);

        const newCollection: Collection = {
          id: Date.now(),
          name: newName,
          animes: [],
        };
        state.collections.push(newCollection);
        localStorage.setItem("collections", JSON.stringify(state.collections));
      } catch (error) {
        throw error;
      }
    },
    updateCollectionName: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      try {
        const { id, name } = action.payload;
        const collectionIndex = state.collections.findIndex(
          (collection) => collection.id === id
        );
        if (collectionIndex !== -1) {
          const newName = validateName(name.trim(), state.collections);
          state.collections[collectionIndex].name = newName;
          localStorage.setItem(
            "collections",
            JSON.stringify(state.collections)
          );
        }
      } catch (error) {
        throw error;
      }
    },
    deleteCollection: (state, action: PayloadAction<number>) => {
      state.collections = state.collections.filter(
        (collection) => collection.id !== action.payload
      );
      localStorage.setItem("collections", JSON.stringify(state.collections));
    },

    addAnime: (
      state,
      action: PayloadAction<{ idCollection: number; anime: MediaType }>
    ) => {
      try {
        const { idCollection, anime } = action.payload;

        const collection = state.collections.find(
          (collection) => collection.id === idCollection
        );

        if (collection) {
          collection.animes.push(anime);
          localStorage.setItem(
            "collections",
            JSON.stringify(state.collections)
          );
        } else {
          throw new Error("collection tidak ditemukan");
        }
      } catch (error) {
        throw error;
      }
    },
    removeAnime: (
      state,
      action: PayloadAction<{ idAnime: number; idCollection: number }>
    ) => {
      try {
        const { idCollection, idAnime } = action.payload;

        const collection = state.collections.find(
          (collection) => collection.id === idCollection
        );

        if (collection) {
          collection.animes = collection.animes.filter(
            (anime) => anime.id !== idAnime
          );

          localStorage.setItem(
            "collections",
            JSON.stringify(state.collections)
          );
        } else {
          throw new Error("collection tidak ditemukan");
        }
      } catch (error) {
        throw error;
      }
    },

    getCollectionFormAnime: (state, action: PayloadAction<number>) => {
      const animeId = action.payload;
      state.selectedCollections = state.collections.filter((collection) =>
        collection.animes.some((anime) => anime.id === animeId)
      );
    },
  },
});

export const {
  initCollection,
  catchError,
  getCollection,
  addCollection,
  updateCollectionName,
  deleteCollection,
  addAnime,
  removeAnime,
  getCollectionFormAnime,
} = collectionsSlice.actions;

export const selectCollections = (state: RootState) =>
  state.collections.collections;

export default collectionsSlice.reducer;

const validateName = (name: string, collections: Collection[]) => {
  const newName = name;
  if (!newName) {
    throw new Error("Nama tidak boleh kosong");
  }

  const pattern = /^[a-zA-Z0-9 ]+$/;
  if (!pattern.test(newName)) {
    throw new Error("Nama collections tidak boleh mengandung karakter khusus");
  }

  if (collections.some((collection) => collection.name === newName)) {
    throw new Error("Nama collections telah digunakan");
  }
  return newName;
};
