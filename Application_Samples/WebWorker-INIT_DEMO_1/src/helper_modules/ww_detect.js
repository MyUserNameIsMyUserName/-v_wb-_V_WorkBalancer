const CanUseWebWorkers =  (typeof window !== "undefined") ? ( (window.Worker) ? true : false ) : false;

module.exports = CanUseWebWorkers;