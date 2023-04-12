//es-lint-disable-next-line
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette, PaletteColor } from "@mui/material/styles/createPalette"

 declare module "@mui/material/styles/createPalette" {
    interface PalleteColor {
        [key: number] : string;
    }
 
    interface Palette {
        tertiary: PaletteColor 
        }
    }