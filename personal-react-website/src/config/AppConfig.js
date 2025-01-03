const config = {
  about_me: {
    name: "Nurzhanat Zhussup",
    position: "Software Engineer | Data Scientist",
    current_position: "Data Scientist @ Raiffeisen Bank International AG",
  },
  api: {
    personal: {
      base_url: "https://api.nzhussup.com/api/v1", 
      endpoints: {
        work_experience: "work-experience",
        education: "education",
        projects: "project",
        skills: "skill",
        certifications: "certificate",
      }
    },
    github: {
      base_url: "https://api.github.com/repos",
      token: import.meta.env.VITE_GITHUB_TOKEN
    }
  }
};

export default config;
  