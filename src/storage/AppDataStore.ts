// Copyright (c) Microsoft Corporation
// All rights reserved.
//
// MIT License:
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED ""AS IS"", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
// LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import * as trips from "../trips/TripsApi";

// =========================================================
// Application data storage
// =========================================================

export interface TeamData {
    groupId: string;
    tripId: string;
    creationTime: Date;
    archivalTime?: Date;
    tripSnapshot: trips.Trip;
}

// Interface to app data store, which tracks info about teams and general app data
export interface IAppDataStore {
    // Add or update info about a team that app created
    addOrUpdateTeamDataAsync(teamData: TeamData): Promise<void>;

    // Delete info about a team that app created
    deleteTeamDataAsync(groupId: string): Promise<void>;

    // Find team info given a group (team) id
    getTeamDataByGroupAsync(groupId: string): Promise<TeamData>;

    // Find team info given a trip id
    getTeamDataByTripAsync(tripId: string): Promise<TeamData>;

    // Find active (not archived) teams that were created before the given time
    findActiveTeamsCreatedBeforeTimeAsync(endTime: Date): Promise<TeamData[]>;

    // Find teams that were created by this app
    getAllTeamsAsync(): Promise<TeamData[]>;

    // Get app metadata
    getAppDataAsync(key: string): Promise<any>;

    // Set app metadata
    setAppDataAsync(key: string, data: any): Promise<void>;
}
