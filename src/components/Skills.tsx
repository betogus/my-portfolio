import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

enum TypeSkills {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  DEVOPS = "DevOps",
  OTHERS = "Others",
}

const Skills = () => {
  const [typeFilter, setTypeFilter] = useState<TypeSkills | undefined>(
    undefined
  );

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== "NONE") {
      setTypeFilter(event.target.value as TypeSkills);
    }
  };

  return (
    <div
      className="flex gap-10 justify-start w-full flex-col items-center"
      style={{
        minHeight: "calc(100vh - 6rem)",
        maxHeight: "calc(100vh - 6rem)",
      }}
    >
      <h1 className="text-white text-4xl mb-10 self-start mt-8">Skills</h1>
      <div
        className="flex gap-10 w-full border-2 border-[#4E549B] rounded-2xl px-8"
        style={{
          height: "calc(100vh - 6rem)",
        }}
      >
        <div className="grid grid-cols-12 border-b-2 border-[#4E549B] h-20 py-4 w-full items-center">
          <p className="col-span-1 text-[#4E549B] text-lg">Filter by:</p>
          <FormControl className="col-span-2" variant="filled" >
            <Select
              displayEmpty
              labelId="filter"
              id="demo-simple-select"
              value={typeFilter}
              label="Age"
              onChange={handleChange}
              sx={{color: "#4E549B", height: "3em", borderRadius: "0.5em"}}
            >
              <MenuItem value={TypeSkills.BACKEND}>BACKEND</MenuItem>
              <MenuItem value={TypeSkills.DATABASE}>DATABASE</MenuItem>
              <MenuItem value={TypeSkills.DEVOPS}>DEVOPS</MenuItem>
              <MenuItem value={TypeSkills.FRONTEND}>FRONTEND</MenuItem>
              <MenuItem value={"NONE"}>NONE</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default Skills;
