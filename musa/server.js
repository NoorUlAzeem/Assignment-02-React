// server.js - serves static frontend files on http://localhost:3000
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// serve static files from current directory
app.use(express.static(path.join(__dirname)));

// fallback to index.html for any other route (use '/*' instead of '*')
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running — open http://localhost:${PORT}`);
});
