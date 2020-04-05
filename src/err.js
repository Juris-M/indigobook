export default (e, extra) => {
    if (extra) {
        console.log(`Axios fail: ${e.message} (${extra})`);
    } else {
        console.log(`Axios fail: ${e.message}`);
    }
}
