/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog($input: CreateBlogInput!) {
  createBlog(input: $input) {
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
export const updateBlog = `mutation UpdateBlog($input: UpdateBlogInput!) {
  updateBlog(input: $input) {
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
export const deleteBlog = `mutation DeleteBlog($input: DeleteBlogInput!) {
  deleteBlog(input: $input) {
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
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
