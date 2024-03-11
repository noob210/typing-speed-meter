const Grade = (speed, accuracy) => {

    let nomarlizedWPM = (speed/50)*100;

    if(nomarlizedWPM > 100) {
        nomarlizedWPM = 100;
    }
    
    const grade = Math.round((0.5 * nomarlizedWPM) + (0.5 * accuracy));

    return grade;
}

export default Grade;