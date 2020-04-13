const covid19ImpactEstimator = (data) => {;

    const {
        region: {
            avgDailyIncomeInUsd
        },
        reportedCases,
        timeToElapse,
        periodType,
        population,
        totalHospitalBeds
    } = data;
    const Impact = {};
    const severeImpact = {};
    Impact.currentlyInfected = math.trunc(reportedCases * 10);
    severeImpact.currentlyInfected = math.trunc(reportedCases * 50);

    let timeFactor;

    switch (periodType.trim.toLowerCase) {
        case 'months':
            timeFactor = math.trunc((timeToElapse * 30) / 3);
            break;
        case 'weeks':
            timeFactor = math.trunc((timeToElapse * 7) / 3);
            break;
        case 'days':
            timeFactor = math.trunc((timeToElapse * 3) / 3);
            break;
        default:
    }
    impact.infentionsByRequestedTime = impact.currentlyInfected * (2 ** timeFactor);
    severeImpact.infentionsByRequestedTime = severeImpact.currentlyInfected * (2 ** timeFactor);

    //Challenge 2
    const impactRequestedTime = impact.infentionsByRequestedTime * 0.15;

    severeCasesByRequestedTime = math.trunc(severeImpactRequest);

    const bedsAvailable = totalHospitalBeds * 0.35;
    const ImpactHospitalBedval = bedsAvailable - impactRequestedTime;
    const sevImpactHospitalBedval = bedsAvailable - severeImpactRequest;

    Impact.hospitalBedsByRequestedtime = math.trunc(sevImpactHospitalBedval);
    severeImpact.hospitalBedsByRequestedtime = math.trunc(sevImpactHospitalBedval);

    //Challenge 3
    const ImpactCasesforIcu = impact.infentionsByRequestedTime * 0.05;
    const sevImpactCasesForIcu = severeImpact.infectionsByRequestedTime * 0.05;
    const ImpactVentilator = Impact.infectionsByRequestedTime * 0.02;
    const SevImpactVentilator = severeImpact.infectionsByRequestedTime * 0.02;

    impact.CasesForIcuByRequestedTime = math, trunc(ImpactCasesforIcu);
    severeImpact.CasesForIcuByRequestedTime = math.trunc(sevImpactCasesForIcu);

    impact.CasesForIcuByRequestedTime = math.trunc(ImpactVentilator);
    severeImpact.CasesForVentilatorsByRequestedTime = math.trunc(SevImpactVentilator);

    let newDay;
    const compute = population * avgDailyIncomeInUsd
    if (periodType === 'months') {
        newDay = timeToElapse * 30;
        impact.dollarsInFlight = (
            math.trunc((impact.infentionsByRequestedTime * compute) / newDay)
        );
    } else if (periodType === 'weeks') {
        newDay = timeToElapse * 7;
        impact.dollarsInFlight = (
            math.trunc((impact.infectionsByRequestedTime * compute) / newDay)
        );
        severeImpact.dollarsInFlight = (
            math.trunc((severeImpact, infectionsByRequestedTime * compute) / newDay)
        );
    } else if (periodType === 'days') {
        newDay = timeToElapse * 1
        impact.dollarsInFlight = (
            math.trunc((impact, infectionsByRequestedTime * compute) / newDay)
        );
        severeImpact.dollarsInFlight = (
            math.trunc((severeImpact.infectionsByRequestedTime * compute) / newDay)
        );
    }
    return {
        data,
        impact,
        severeImpact
    };
};
};

export default covid19ImpactEstimator;