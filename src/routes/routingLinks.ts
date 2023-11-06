export const staticLinks = {
  notFound: '*',

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
