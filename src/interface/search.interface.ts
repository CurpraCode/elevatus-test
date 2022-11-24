import { Job } from "./job.interface";

type optionType = {
  title: string;
};

export default interface SearchInterface {
  searchText: string;
  filteredOptions: Job[];
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  option: optionType;
  setOption: React.Dispatch<React.SetStateAction<optionType>>;
}
