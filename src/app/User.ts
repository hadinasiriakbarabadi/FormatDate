import { FormatDate } from "pl-decorator";

export class User{
    @FormatDate("DD/MM/YYYY HH:mm:ss")
     time: Date ;
}