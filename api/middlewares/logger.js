export const logger = (req,res, next)=>{
    const date = new Date();
    console.log(`[${date.toISOString()} ${req.method} ${req.uri}]`);
    next();
}