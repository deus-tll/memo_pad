const apiErrorHandler = (err, req, res, next) => {
    console.error('An error occurred:', { message: err.message, stack: err.stack });
    res.status(500).send('Internal Server Error');
};

export default apiErrorHandler;