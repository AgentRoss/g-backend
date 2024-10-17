// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {} OR const asynchandler = (fn) => {()=> {}}
// const asyncHandler = (fn) => async () => {}


  const asyncHandler = (fn) => async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      res.status(error.code || 500).json({
        success: false,
        message: error.message
      })
    }
  }


  export {asyncHandler}
