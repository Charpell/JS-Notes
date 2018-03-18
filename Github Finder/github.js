class Github {
  constructor() {
    this.client_id = '62cea19f342af5bd356d';
    this.client_secret = '843eef73a626bf0ae3361e9e3f7287b1849606d8';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/
    ${user}?client_id=${this.client_id}&client_secret=$
    {this.client_secret}`)

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}