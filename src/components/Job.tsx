import {
  Box,
  Text,
  SimpleGrid,
  Card,
  Heading,
  CardHeader,
  CardFooter,
  CardBody,
  Button,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { Search } from "./Search";
import JobInterface from "../interface/job.interface";

const Jober: FC<JobInterface> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [jobShow, setJobShow] = useState(props.jobs);
  const [searchText, setSearchText] = useState("");
  console.log(jobShow);
  // const jobArr = jobShow.job;
  const filterInitialState = {
    title: "",
  };
  const [option, setOption] = useState(filterInitialState);
  const titleFilter = jobShow.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (job: any) =>
      job.title.toLowerCase().includes(option.title.toLocaleLowerCase()) ||
      option.title === "",
  );
  const filteredOptions = titleFilter.filter(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (job: any) =>
      job.title.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
      searchText === "",
  );

  //search props
  const searchProps = {
    searchText,
    setSearchText,
    filteredOptions,
    option,
    setOption,
  };

  return (
    <Box w={["100%", "100%", "80%", "80%"]} m="auto">
      <Search {...searchProps} />

      {filteredOptions.length ? (
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {filteredOptions.map((data, index) => (
            <Card key={index}>
              <CardHeader>
                <Heading size="md">{data.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{data.location.country}</Text>
                <Text>{data.career_level ? data.career_level : `N/A`}</Text>
                <Text>{data.requirement}</Text>
              </CardBody>
              <CardFooter>
                <Button>View here</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      ) : (
        <Text
          my="1.3rem"
          color="brand.300"
          fontSize={"1.5rem"}
          fontWeight={700}
        >
          No transactions matches your search.
        </Text>
      )}
    </Box>
  );
};

export default Jober;
