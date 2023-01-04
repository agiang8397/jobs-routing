import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../jobs.json";

function DetailPage() {
  const params = useParams();
  const bookId = params.id;
  const job = jobs.find((job) => job.id === bookId);

  return (
    <div>
      <Container>
        <Box>
          <Typography variant="h5">
            HELLO TEACHER <br /> {job.title}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default DetailPage;
