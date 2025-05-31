import PusherServer from 'pusher';
import PusherClient from 'pusher-js';
import { PUSHER_CONFIG } from '../../lib/config';

/**
 * Pusher server instance for server-side operations
 * Uses configuration from the centralized config module
 */
export const pusherServer = new PusherServer({
    appId: PUSHER_CONFIG.SERVER.APP_ID,
    key: PUSHER_CONFIG.SERVER.KEY,
    secret: PUSHER_CONFIG.SERVER.SECRET,
    cluster: PUSHER_CONFIG.SERVER.CLUSTER,
    useTLS: PUSHER_CONFIG.SERVER.USE_TLS,
});

/**
 * Pusher client instance for client-side operations
 * Uses configuration from the centralized config module
 */
export const pusherClient = new PusherClient(
    PUSHER_CONFIG.CLIENT.KEY,
    {
        channelAuthorization: {
            endpoint: PUSHER_CONFIG.CLIENT.CHANNEL_AUTHORIZATION.ENDPOINT,
            transport: PUSHER_CONFIG.CLIENT.CHANNEL_AUTHORIZATION.TRANSPORT
        },
        cluster: PUSHER_CONFIG.CLIENT.CLUSTER,
    }
);