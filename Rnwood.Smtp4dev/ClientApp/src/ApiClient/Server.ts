﻿
//ServerRelayOptions from Server
import ServerRelayOptions from './ServerRelayOptions';
export default class Server {
 
    constructor(isRunning: boolean, exception: string, portNumber: number, hostName: string, allowRemoteConnections: boolean, numberOfMessagesToKeep: number, numberOfSessionsToKeep: number, relayOptions: ServerRelayOptions, ) {
         
        this.isRunning = isRunning; 
        this.exception = exception; 
        this.portNumber = portNumber; 
        this.hostName = hostName; 
        this.allowRemoteConnections = allowRemoteConnections; 
        this.numberOfMessagesToKeep = numberOfMessagesToKeep; 
        this.numberOfSessionsToKeep = numberOfSessionsToKeep; 
        this.relayOptions = relayOptions;
    }

     
    isRunning: boolean; 
    exception: string; 
    portNumber: number; 
    hostName: string; 
    allowRemoteConnections: boolean; 
    numberOfMessagesToKeep: number; 
    numberOfSessionsToKeep: number; 
    relayOptions: ServerRelayOptions;
}
