const calculateAverageFootprint = (data) => {
    const totalFootprint = data.reduce((total, fpObj) => total + fpObj.total, 0);
    const averageFootprint = totalFootprint / data.length;
    return averageFootprint.toFixed(2)
}

export { calculateAverageFootprint };