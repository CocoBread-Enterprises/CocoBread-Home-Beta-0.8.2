(function() {
    let textFile = null,
        makeTextFile = function(text) {
            let data = new Blob([text], {
                type: 'text/plain'
            });

            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };


    let create = document.getElementById('create'),
        textbox = document.getElementById('textbox');

    create.addEventListener('click', function() {
        let link = document.getElementById('downloadlink');
        link.href = makeTextFile(textbox.value);
        link.style.display = 'block';
        document.getElementById('create').style.display = 'none';
    }, false);
})();

function functionreset() {
    let link = document.getElementById('downloadlink');
    link.style.display = 'none';
    document.getElementById('create').style.display = 'block';
}

 document.getElementById("textbox").onchange = function() {functionreset()}