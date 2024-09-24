"use client";
import { SERVER_URI } from "./utils/constants";

import { io } from "socket.io-client";

export const socket = io(SERVER_URI);
