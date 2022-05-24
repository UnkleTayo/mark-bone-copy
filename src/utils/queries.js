import { gql, useQuery } from '@apollo/client';

export const PROJECT_QUERY = gql`
  query MyQuery {
    projects {
      id
      name
      projectDescription
      projectImage
      publishedAt
      slug
      updatedAt
      videoUrl
      crewAlternative {
        html
      }
    }
  }
`;

export const SINGLE_PROJECT = gql`
  query SingleProject($slug: String = "") {
    project(where: { slug: $slug }) {
      id
      name
      projectDescription
      projectImage
      slug
      videoUrl
      crewAlternative {
        html
      }
    }
    projects {
      id
      slug
      projectImage
    }
  }
`;

export const BlACk_AND_WHITE = gql`
  query BlackAndWhite {
    stills {
      name
      id
      image
    }
  }
`;

export const ABOUT = gql`
  query About {
    profiles {
      id
      name
      profileDetails {
        html
      }
      profileImage
    }
  }
`;
