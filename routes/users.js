var express = require("express");
var router = express.Router();
const { createClient } = require("@supabase/supabase-js");

// Initialize Supabase client
const supabaseUrl = "https://your-project-id.supabase.co";
const supabaseKey = "your-anon-or-service-key"; // Use the service role key for admin access
const supabase = createClient(supabaseUrl, supabaseKey);

/* GET users listing. */
router.get("/", async function (req, res, next) {
  try {
    // Fetch users from Supabase
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      throw error;
    }

    res.json(data); // Return user data as JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
