import { motion, useInView } from "framer-motion";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputBase,
} from "@mui/material";
import { useState, useRef } from "react";

enum TypeSkills {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
  DATABASE = "Database",
  DEVOPS = "DevOps",
  OTHERS = "Others",
}

const allSkills = [
  { label: "React", type: TypeSkills.FRONTEND },
  { label: "TypeScript", type: TypeSkills.FRONTEND },
  { label: "Express", type: TypeSkills.BACKEND },
  { label: "Docker", type: TypeSkills.DEVOPS },
  { label: "Figma", type: TypeSkills.OTHERS },
  { label: "react native", type: TypeSkills.FRONTEND },
  { label: "HTML", type: TypeSkills.FRONTEND },
  { label: "CSS", type: TypeSkills.FRONTEND },
  { label: "JavaScript", type: TypeSkills.FRONTEND },
  { label: "Java", type: TypeSkills.BACKEND },
  { label: "Spring Boot", type: TypeSkills.BACKEND },
  { label: "TypeScript", type: TypeSkills.FRONTEND },
  { label: "Redux", type: TypeSkills.FRONTEND },
  { label: "Tailwind CSS", type: TypeSkills.FRONTEND },
  { label: "Bootstrap", type: TypeSkills.FRONTEND },
  { label: "Material UI", type: TypeSkills.FRONTEND },
  { label: "SASS/SCSS", type: TypeSkills.FRONTEND },
  { label: "Vite", type: TypeSkills.FRONTEND },
  { label: "Node.js", type: TypeSkills.BACKEND },
  { label: "Express.js", type: TypeSkills.BACKEND },
  { label: "MongoDB", type: TypeSkills.DATABASE },
  { label: "MySQL", type: TypeSkills.DATABASE },
  { label: "Firebase", type: TypeSkills.DATABASE },
  { label: "SQLite", type: TypeSkills.DATABASE },
  { label: "cloudwatch", type: TypeSkills.DEVOPS },
  { label: "aws", type: TypeSkills.DEVOPS },
  { label: "elasticsearch", type: TypeSkills.DATABASE },
  { label: "Git", type: TypeSkills.OTHERS },
  { label: "GitHub", type: TypeSkills.OTHERS },
  { label: "Bitbucket", type: TypeSkills.OTHERS },
  { label: "Postman", type: TypeSkills.OTHERS },
  { label: "Swagger", type: TypeSkills.OTHERS },
  { label: "Jira", type: TypeSkills.OTHERS },
  { label: "Slack", type: TypeSkills.OTHERS },
  { label: "Discord", type: TypeSkills.OTHERS },
  { label: "Trello", type: TypeSkills.OTHERS },
  { label: "Wordpress", type: TypeSkills.OTHERS },
];

const Skills = () => {
  const [typeFilter, setTypeFilter] = useState<TypeSkills | undefined>(
    undefined
  );
  const [search, setSearch] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref);

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== "NONE") {
      setTypeFilter(event.target.value as TypeSkills);
    } else {
      setTypeFilter(undefined);
    }
  };

  const filteredSkills = allSkills.filter((skill) => {
    const matchesType = typeFilter ? skill.type === typeFilter : true;
    const matchesSearch = skill.label
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <motion.div
  className="flex gap-10 justify-start w-full flex-col items-center px-4 md:px-12"
  style={{
    minHeight: "calc(100vh - 6rem)",
  }}
  ref={ref}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-white text-3xl md:text-4xl mb-6 mt-8 self-start">Skills</h1>

  <motion.div
    className="flex flex-col gap-6 w-full border-2 border-[#4E549B] rounded-2xl px-6 py-6 md:px-8 md:py-8"
    style={{ flexGrow: 1 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: isInView ? 1 : 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Filtros */}
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
      <p className="text-[#4E549B] text-base md:text-lg whitespace-nowrap">Filter by:</p>

      <FormControl size="small" className="w-full md:w-48" variant="filled">
        <Select
          displayEmpty
          labelId="filter"
          id="filter-select"
          value={typeFilter ?? "NONE"}
          onChange={handleChange}
          sx={{
            color: "#4E549B",
            backgroundColor: "#1c1c2b",
            borderRadius: "8px",
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                backgroundColor: "#1c1c2b",
                color: "#4E549B",
              },
            },
          }}
        >
          <MenuItem value="NONE">ALL</MenuItem>
          <MenuItem value={TypeSkills.FRONTEND}>FRONTEND</MenuItem>
          <MenuItem value={TypeSkills.BACKEND}>BACKEND</MenuItem>
          <MenuItem value={TypeSkills.DATABASE}>DATABASE</MenuItem>
          <MenuItem value={TypeSkills.DEVOPS}>DEVOPS</MenuItem>
          <MenuItem value={TypeSkills.OTHERS}>OTHERS</MenuItem>
        </Select>
      </FormControl>

      <InputBase
        placeholder="Search skills..."
        className="w-full md:w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          color: "#ccc",
          backgroundColor: "#1c1c2b",
          border: "1px solid #4E549B",
          padding: "8px 16px",
          borderRadius: "8px",
          fontSize: "0.9rem",
          "& .MuiInputBase-input::placeholder": {
            color: "#888",
            opacity: 1,
          },
        }}
      />
    </div>

    {/* Skills list */}
    <div className="flex flex-wrap gap-3 overflow-y-auto max-h-[50vh] md:max-h-[60vh]">
      {filteredSkills.map((skill, index) => (
        <span
          key={index}
          className="bg-transparent text-[#00DF70] border border-[#00DF70] rounded-full px-4 py-2 text-sm whitespace-nowrap"
        >
          {skill.label}
        </span>
      ))}
    </div>
  </motion.div>
</motion.div>

  );
};

export default Skills;
