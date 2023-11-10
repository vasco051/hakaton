export const staticLinks = {
  //public
  notFound: '*',
  main: '/main',

  // unauthorized
  registration: '/registration',
  authorization: '/authorization',

  // authorized
  rooms: '/rooms',
  roomCreate: '/room_create',
  room: '/rooms/:id'
};

export const dynamicLinks = {
  room: (id: number) => `/rooms/${id}`
};
