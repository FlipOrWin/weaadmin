/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    estadoViaje
    estadoSolicitud
    nombreUsuario
    precio
    tiempo
    distancia
    nombreChofer
    idUsuario
    idChofer
    latitudOrigenUsuario
    longitudOrigenUsuario
    latitudChofer
    longitudChofer
    driverLocation {
      lat
      lon
    }
    userOriginLocation {
      lat
      lon
    }
    userDestinyLocation {
      lat
      lon
    }
    latitudDestinoUsuario
    longitudDestinoUsuario
    calificacionChofer
    calificacionUsuario
    comentarioChofer
    comentarioUsuario
    posts {
      nextToken
    }
  }
}
`;
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      estadoViaje
      estadoSolicitud
      nombreUsuario
      precio
      tiempo
      distancia
      nombreChofer
      idUsuario
      idChofer
      latitudOrigenUsuario
      longitudOrigenUsuario
      latitudChofer
      longitudChofer
      latitudDestinoUsuario
      longitudDestinoUsuario
      calificacionChofer
      calificacionUsuario
      comentarioChofer
      comentarioUsuario
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    latitudChofer
    longitudChofer
    blog {
      id
      estadoViaje
      estadoSolicitud
      nombreUsuario
      precio
      tiempo
      distancia
      nombreChofer
      idUsuario
      idChofer
      latitudOrigenUsuario
      longitudOrigenUsuario
      latitudChofer
      longitudChofer
      latitudDestinoUsuario
      longitudDestinoUsuario
      calificacionChofer
      calificacionUsuario
      comentarioChofer
      comentarioUsuario
    }
    comments {
      nextToken
    }
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      latitudChofer
      longitudChofer
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    latitudOrigenUsuario
    longitudOrigenUsuario
    latitudDestinoUsuario
    longitudDestinoUsuario
    post {
      id
      latitudChofer
      longitudChofer
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      latitudOrigenUsuario
      longitudOrigenUsuario
      latitudDestinoUsuario
      longitudDestinoUsuario
    }
    nextToken
  }
}
`;
