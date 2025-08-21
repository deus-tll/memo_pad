import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const RATE_LIMIT_AMOUNT_OF_REQUESTS = process.env.RATE_LIMIT_AMOUNT_OF_REQUESTS || 100;
const RATE_LIMIT_AMOUNT_OF_SECONDS = process.env.RATE_LIMIT_AMOUNT_OF_SECONDS || "60 s";

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_AMOUNT_OF_REQUESTS, RATE_LIMIT_AMOUNT_OF_SECONDS)
});

export default ratelimit;