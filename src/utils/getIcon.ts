import {CATEGORY_ICONS} from "../store/constants";

export const getIcon = (category: string): string => {
    const idx = CATEGORY_ICONS.findIndex(i => i.name === category)
    return CATEGORY_ICONS[idx].icon
}