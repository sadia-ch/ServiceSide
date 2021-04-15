import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const TEXT_INPUT_HEIGHT = 150;
export const FOOTER_HEIGHT = 70;

export const LOGIN_VIEW_HEIGHT = TEXT_INPUT_HEIGHT + FOOTER_HEIGHT;

export const LOGO_HEIGHT_POSITION = LOGIN_VIEW_HEIGHT*2;
export const MID_CONTAINER_HEIGHT = SCREEN_HEIGHT - 100;