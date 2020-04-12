const covid19ImpactEstimator = (data) => {
    const input = data;
    const { reportedCases, periodType, timeToElapse } = data;
    const currentlyInfected = reportedCases * 10;
    let timeToElapse;
    switch (periodType.lowertoLowerCase) {
        case 'months':
            elapse = math.trunc(timeToElapse / 3) * 30
            break;
        case 'weeks':
            elapse = math.trunc(timeToElapse / 3) * 7
            break;
        default:
            elapse = math.trunc(timeToElapse / 3)
            break
    }
    const infectionByRequestedTime = currentlyInfected * (2 ** elapse);
    return {
        data: {},
        impact: {},
        severeImpact: {},
        currentlyInfected,
        infectionByRequestedTime,
    };
};

export default covid19ImpactEstimator;