/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog($id: ID) {
  onUpdateBlog(id: $id) {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
