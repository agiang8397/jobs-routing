import { Typography } from "@mui/material";
import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import StandardImageList from "../components/StandardImageList";
import jobs from "../jobs.json";

function DetailPage() {
  const params = useParams();
  const bookId = params.id;
  const job = jobs.find((job) => job.id === bookId);

  return (
    <div>
      <Container>
        <Box>
          <Paper>
            <Typography variant="h5">{job.title}</Typography>
            <Typography variant="paragraphy">{job.description}</Typography>
            <StandardImageList />
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

export default DetailPage;
