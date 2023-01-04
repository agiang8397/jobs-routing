import React, { useState } from "react";
import BasicCard from "../components/BasicCard";
import jobs from "../jobs.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";

function HomePage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ from: 0, to: 6 });
  const handleChange = (event, value) => {
    setPage(value);
    if (value === 1) {
      setData({ ...data, from: 0, to: 6 });
    }
    if (value === 2) {
      setData({ ...data, from: 6, to: 12 });
    }
    if (value === 3) {
      setData({ ...data, from: 12, to: 18 });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }} mt={2}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {jobs.slice(data.from, data.to).map((job) => (
          <Grid item xs={4} key={job.id}>
            <BasicCard job={job} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Stack spacing={2}>
          <Pagination count={3} page={page} onChange={handleChange} />
        </Stack>
      </Box>
    </Box>
  );
}

export default HomePage;
