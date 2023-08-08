import { useEffect, useState } from "react";
import { GET_ANIME_LIST } from "@/stores/graphql";
import ReactPaginate from "react-paginate";
import { useQuery } from "@apollo/client";
import AnimeCard from "@/components/card/AnimeCard";
import Skeleton, { dummyData } from "@/components/card/Skeleton";
import { styles } from "@/styles/anime.styles";
import Button from "@/components/button/Button";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import useSweetAlert from "@/hooks/useSweetAlert";
import InputCustom from "@/components/input/InputCustom";
import useDebounce from "@/hooks/useDebounce";
import SelectOption from "@/components/input/SelectOption";
import { SORT_LIST_OPTION } from "@/utils/sortOption";

const Anime = () => {
  const [animes, setAnimes] = useState<MediaType[]>([]);
  const [useLoadMore, setUseLoadMore] = useState<boolean>(false);
  const [usePagination, setUsePagination] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("POPULARITY_DESC");
  const [pageVariable, setPageVariable] = useState<PageInfo | undefined>({
    total: 0,
    currentPage: 1,
    lastPage: 0,
    hasNextPage: false,
    perPage: 10,
  });

  const deboucedSearch = useDebounce(search, 1000);
  const deboucedGenre = useDebounce(genre, 1000);

  const { loading, error, data } = useQuery<PayloadType>(GET_ANIME_LIST, {
    variables: {
      page: pageVariable?.currentPage,
      perPage: pageVariable?.perPage,
      sort: sortBy,
      genre: deboucedGenre ? deboucedGenre : undefined,
      search: deboucedSearch ? deboucedSearch : undefined,
    },
  });

  const { toast } = useSweetAlert();

  const handlePagination = (selectedItem: { selected: number }) => {
    setUsePagination(true);
    const obj = { ...(pageVariable as PageInfo) };
    obj.currentPage = selectedItem.selected + 1;
    setPageVariable(obj);
  };

  const loadMore = () => {
    setUseLoadMore(true);
    const obj = { ...(pageVariable as PageInfo) };
    obj.currentPage += 1;
    setPageVariable(obj);

    const scrollY = window.scrollY;

    setTimeout(() => {
      window.scrollTo(0, scrollY);
    }, 0);
  };

  useEffect(() => {
    if (loading === false && !error) {
      setPageVariable(data?.Page.pageInfo);
    }

    if (data?.Page.media.length) {
      if (useLoadMore) {
        setAnimes((state) => [...state, ...data.Page.media]);
        setUseLoadMore(false);
      } else {
        setAnimes(data.Page.media);
        setUsePagination(false);
      }
    }

    if (error) toast(error.message, "error");
    return () => {};
  }, [loading, error, data?.Page.pageInfo.currentPage]);

  useEffect(() => {
    setUsePagination(true);

    return () => {};
  }, []);

  return (
    <section css={styles.container}>
      <div css={styles.subSection}>
        <div css={styles.header}>
          <h1>Anime List</h1>
        </div>
        <div css={styles.filter}>
          <div css={styles.searchTitle}>
            <h2>Search</h2>
            {(search || genre) && (
              <Button
                size="sm"
                type="button"
                onClick={() => (setSearch(""), setGenre(""))}
              >
                Reset
              </Button>
            )}
          </div>
          <div css={styles.inputs}>
            <div>
              <InputCustom
                type="text"
                placeholder="Cari Anime"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div>
              <InputCustom
                type="text"
                placeholder="Genre Anime"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div>
              <SelectOption
                data={SORT_LIST_OPTION}
                name={"Sort"}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "0.25rem solid var(--accent-secondary)",
            width: "100%",
          }}
        />
        <ul css={styles.container}>
          {usePagination
            ? dummyData.map((_, index) => <Skeleton key={index} />)
            : animes.map((anime) => (
                <li key={anime.id}>
                  <AnimeCard item={anime} />
                </li>
              ))}
        </ul>
        {pageVariable && (
          <ReactPaginate
            breakLabel="..."
            nextLabel={
              <FontAwesomeIcon
                icon={faForward}
                css={css({ cursor: "pointer" })}
              />
            }
            previousLabel={
              <FontAwesomeIcon
                icon={faBackward}
                css={css({ cursor: "pointer" })}
              />
            }
            onPageChange={handlePagination}
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            pageCount={pageVariable.lastPage}
            renderOnZeroPageCount={null}
            css={styles.pagination}
          />
        )}

        <div
          css={css({
            paddingBottom: "1rem",
            "@media (min-width: 768px)": { display: "none" },
          })}
        >
          {!loading ? (
            <Button useStyle={true} size="lg" onClick={loadMore}>
              Load More
            </Button>
          ) : (
            <BeatLoader css={{ color: "var(--accent-primary)" }} />
          )}
        </div>
      </div>
    </section>
  );
};

export default Anime;
