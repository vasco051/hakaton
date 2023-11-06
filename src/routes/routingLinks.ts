export const staticLinks = {
  //public
  notFound: '*',
  main: '/glavnaya',

  // unauthorized
  registration: '/registraciya',
  authorization: '/avtorizaciya',

  // authorized
  rooms: '/rooms',
  room: '/rooms/:id'
};

export const dynamicLinks = {
  room: (id: number) => `/rooms/${id}`
};
