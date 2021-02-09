import { Log } from "../models/log";

export interface ILogService {
    createlog(logObj: Log): Promise<Log>; 
}