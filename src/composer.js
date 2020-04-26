const composer = (items, params, newCite, comment) => {
    var keysArray = JSON.stringify(items.map((o) => o.id), null, 2);
    var paramsArray = JSON.stringify([params], null, 2);
    var itemsArray = JSON.stringify(items, null, 2);
    return `
>>===== MODE =====>>
citation
<<===== MODE =====<<

>>===== OPTIONS =====>>
{
    "wrap_url_and_doi": true
}
<<===== OPTIONS =====<<

>>===== KEYS =====>>
${keysArray}
<<===== KEYS =====<<

>>===== DESCRIPTION =====>>
${comment}
<<===== DESCRIPTION =====<<

>>===== RESULT =====>>
${newCite}
<<===== RESULT =====<<

>>===== CITATION-ITEMS =====>>
${paramsArray}
<<===== CITATION-ITEMS =====<<

>>===== INPUT =====>>
${itemsArray}
<<===== INPUT =====<<
`.trim();
}

export default composer;
