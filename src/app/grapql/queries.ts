import { gql } from '@apollo/client';

export const GET_PORTFOLIO_DATA = gql`
  query GetPortfolioData {
    portfolioCollection {
      items {
        sys {
          id
          firstPublishedAt
          publishedAt
        }
        title
        description
        url
        type
        stack
        web
        imageCollection(limit: 3) {
          items {
            url
            title
            width
            height
          }
        }
      }
    }
  }
`;
