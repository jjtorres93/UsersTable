import type { User } from "./types/type";

export function countrySort (a: User, b: User) {
    if ((a.location.country ?? '') < (b.location.country ?? '')) {
        return -1;
    }
    if ((a.location.country ?? '') > (b.location.country ?? '')) {
        return 1;
    }
    return 0;
}
