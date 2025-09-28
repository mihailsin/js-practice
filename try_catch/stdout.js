function stdOutLog(log) {
    const formattedLog = `${log}\n`;
    process.stdout.write(formattedLog);
    process.stderr.write(formattedLog);
}

try {
    throw new Error('NEW Error');
} catch (error) {
    console.log(error);
    stdOutLog(error.message);
}
