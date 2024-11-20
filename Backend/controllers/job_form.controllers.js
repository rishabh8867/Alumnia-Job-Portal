const db = require("../db/index.JS");

const postJob = async (req, res) => {
  try {
    const {
      company_name,
      location,
      degree,
      branch,
      employeer_name,
      number_positions,
      job_role,
      job_description,
      required_skills,
      employement_type,
      salary,
      join_before,
      expiry,
    } = req.body;

    if (!company_name || !location || !job_role || !employement_type) {
      return res.status(400).json({ error: "Required fields are missing" });
    }

    const [newJobId] = await db("job_posting").insert({
      company_name,
      location,
      degree,
      branch,
      employeer_name,
      number_positions,
      job_role,
      job_description,
      required_skills,
      employement_type,
      salary,
      join_before,
      expiry,
    });

    res.status(201).json({ message: "Job posting created", job_id: newJobId });
  } catch (error) {
    console.error("Error creating job posting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
    postJob
}

