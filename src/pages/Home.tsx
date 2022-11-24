import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Jober from "../components/Job";

const Home = () => {
  const [jobs, setJobs] = useState();
  const { data, isLoading, error } = useAxios({
    url: "?language_profile_uuid=ee5d991c-cdc6-4e83-b0b3-96f147208549?page=5",
  });
  useEffect(() => {
    if (data) {
      setJobs(data?.results);
      console.log(data.results);
    }
  }, [jobs, data]);
  console.log(jobs);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error {...error} />
      ) : (
        <Jober jobs={data.results.jobs} />
      )}
    </div>
  );
};

export default Home;
