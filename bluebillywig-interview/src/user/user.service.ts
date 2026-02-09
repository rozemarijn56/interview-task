import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import type { WatchEventPayload } from '../shared/types';

@Injectable()
export class UserService {
    constructor(private readonly http: HttpService) {}

    async updateWatched40(userId: number, payload: WatchEventPayload) {
        return this.patchUser(userId, { watched40: [payload] });
    }

    async updateFinished(userId: number, payload: WatchEventPayload) {
        return this.patchUser(userId, { finished: [payload] });
    }

    private async patchUser(userId: number, data: Record<string, unknown>) {
        const res = await firstValueFrom(
        this.http.patch(`https://jsonplaceholder.typicode.com/users/${userId}`, data, {
            headers: { 'Content-Type': 'application/json' },
        }),
        );
        return res.data;
    }
}
