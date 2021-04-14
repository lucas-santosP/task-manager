import React from "react";
import { waitAsync } from "../utils";

import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";

const MINIMUM_LAZY_WAIT = 700;

const Home = React.lazy(async () => {
  await waitAsync(MINIMUM_LAZY_WAIT);
  return import("./Home");
});

const Profile = React.lazy(async () => {
  await waitAsync(MINIMUM_LAZY_WAIT);
  return import("./Profile");
});

const TemplateTasks = React.lazy(async () => {
  await waitAsync(MINIMUM_LAZY_WAIT);
  return import("./TemplateTasks");
});

export { Login, Register, NotFound, Home, Profile, TemplateTasks };
