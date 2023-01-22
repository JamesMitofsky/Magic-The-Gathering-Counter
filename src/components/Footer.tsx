import { Box, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 1 }}>
      <Link
        variant="body2"
        target="_blank"
        href="https://github.com/JamesMitofsky"
      >
        Made with ❤️ in 🇫🇷 by James Mitofsky
      </Link>
    </Box>
  );
}
