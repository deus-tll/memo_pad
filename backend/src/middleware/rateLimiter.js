import ratelimit from "../config/upstash.js";

const RATE_LIMIT_KEY = process.env.RATE_LIMIT_KEY || "my-rate-limit";

const rateLimiter = async (req, res, next) => {
    try {
        // when auth is present, key should be userId
        const { success } = await ratelimit.limit(RATE_LIMIT_KEY);
        
        if (!success)
        {
            return res.status(429).json({
                message: "Too many requests, please try again later"
            });
        }

        next();
    } 
    catch (error) {
        next(error);
    }
};

export default rateLimiter;