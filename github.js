class GitHub {
  constructor() {
    this.client_id = "13288f5ad16b1d04d761";
    this.client_secret = "5f1766c7bddba1713580e3357fb0734b162770ee";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${
        this.repos_count
      }&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${
        this.client_secret
      }`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      // Same as profile : profile, repos : repos
      profile,
      repos
    };
  }
}
