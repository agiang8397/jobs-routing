import React, { useState } from "react";
import BasicCard from "../components/BasicCard";
import Box from "@mui/system/Box";
import Grid from "@mui/material/Grid";
import { Container, Stack } from "@mui/system";
import { Pagination } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import jobs from "../jobs.json";

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
  const theme = useTheme();
  console.log(theme);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} mt={2}>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {jobs.slice(data.from, data.to).map((job) => (
            <Grid item xs={4} key={job.id}>
              <BasicCard job={job} />
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 2,
          }}
        >
          <Stack spacing={2}>
            <Pagination
              count={3}
              page={page}
              onChange={handleChange}
              color="primary"
            />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
