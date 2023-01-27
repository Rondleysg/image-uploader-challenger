import { useMemo } from "react";
import Cookies from "universal-cookie";

export default function useCookies() {
    const cookies = useMemo(() => new Cookies(), []);
    return cookies;
}
