import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Jober from "../components/Job";
// import ReactPaginate from "react-paginate";
import { Button, Flex, Text } from "@chakra-ui/react";

const Home = () => {
  const [jobs, setJobs] = useState();
  const [count, setCount] = useState(1);
  const limit = 15;

  const { data, isLoading, error } = useAxios({
    url: `?language_profile_uuid=ee5d991c-cdc6-4e83-b0b3-96f147208549&page=${count}&limit=${limit}`,
  });
  useEffect(() => {
    if (data) {
      setJobs(data?.results);
      console.log(data.results.page + 1);
    }
  }, [jobs, data, setCount, limit]);
  console.log(jobs);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handlePrevClick = (count: number) => {
  //   // console.log(data.results.page);
  //   setCount(count--);
  // };
  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleNextClick = (count: number) => {
  //   // console.log(data.results);
  //   // const currentPage = data?.results.page + 1;
  //   setCount(count++);
  // };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error {...error} />
      ) : (
        <Jober jobs={data.results.jobs} />
      )}
      <Flex>
        <Button onClick={() => setCount(data.results.page--)}>Prev</Button>
        <Text>{count}</Text>
        <Button onClick={() => setCount(data.results.page++)}>Next</Button>
      </Flex>
    </div>
  );
};

export default Home;
