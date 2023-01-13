import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { Chip } from "@mui/material";

export default function BasicCard({ job }) {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <Card sx={{ height: 350 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.title}
        </Typography>
        <Typography variant="h5" component="div">
          Up to ${job.salaryHigh}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          {job.city}
        </Typography>
        <Typography variant="body2" minHeight={85}>
          {job.description}
        </Typography>
        <Box spacing={1} display="flex" flexWrap={"wrap"} mt={1} minHeight={80}>
          {job.skills.map((skill, index) => (
            <Chip
              color="primary"
              label={skill}
              key={index}
              sx={{ mr: 1, mt: 1 }}
            />
          ))}
        </Box>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => navigation(`/job/${job.id}`)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
