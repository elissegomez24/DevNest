
export const QUERY_USER = `
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      userName
      skills
      posts {
        _id
        title
        text
      }
    }
  }
`;
