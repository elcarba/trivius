export const config = {
  APP_NAME: 'Trivius',
  COUNTRY_DEFAULT: 'GB',
  LIMIT_DURATION_SONG: 20,

};

function checkUserIsLogged(user){
  return user && Object.keys(user).length !== 0;
}

function isAllowTo(routeName, user){
  switch(routeName){
    case "Log In":
      return !checkUserIsLogged(user);
      break;

    case "Log Out":
      return checkUserIsLogged(user);
      break;

    case "Sign Up":
      return !checkUserIsLogged(user);
      break;

    case "Ranking":
      return true;
      break;

    default:
      return false;
  }
}

export const routes = [
  {
    name: "Log In",
    path: "/login",
    type: "simple",
    visible: isAllowTo
  },
  {
    name: "Sign Up",
    path: "/signup",
    type: "simple",
    visible: isAllowTo
  },

  {
    name: "Ranking",
    path: "/ranking",
    type: "simple",
    visible: isAllowTo
  },

  {
    name: "User",
    type: "dropdown",
    children: [
      {
        name: "Profile",
        path: "/profile",
      },
      {
        name: "Log Out",
        path: "/logout",
      },
    ],
    visible: isAllowTo
  },
];