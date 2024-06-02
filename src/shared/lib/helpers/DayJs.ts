import dayjs from "dayjs";

export const dayJsUtcWithoutSeconds = (str) => {

    return dayjs(str).format("DD/MM/YYYY HH:mm")
}