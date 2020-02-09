document.getElementById('problemInputForm').addEventListener('submit', saveProblem);

function saveProblem (e) {
    var problemDesc = document.getElementById('problemDescInput').value;
    var problemSeverity = document.getElementById('problemSeverityInput').value;
    var problemAssignedTo = document.getElementById('problemAssignedToInput').value;
    var problemId = chance.guid();
    var problemStatus = 'open';

    var problem ={
        id: problemId,
        description: problemDesc,
        severity: problemSeverity,
        assignedTo: problemAssignedTo,
        status: problemStatus
    }

    if (localStorage.getItem('problems') == null) {
        var problems = [];
        problems.push(problem);
        localStorage.setItem('problems', JSON.stringify(problems));
    } else {
        var problems = JSON.parse(localStorage.getItem('problems'));
        problems.push(problem);
        localStorage.setItem('problems', JSON.stringify(problems));
    }

    document.getElementById('problemInputForm').reset();;

    fetchProblems ();

    e.preventDefault();
}

function setStatusClosed (id) {
    var problems = JSON.parse(localStorage.getItem('problems'));

    for (i = 0; i < problems.length; i++) {
        if (problems[i].id ==  id) {
            problems[i].status = "Closed";
        }
    }
    localStorage.setItem('problems', JSON.stringify(problems));

    fetchProblems ();
}

function deleteProblem (id) {
    var problems = JSON.parse(localStorage.getItem('problems'));

    for (i = 0; i < problems.length; i++) {
        if (problems[i].id ==  id) {
            problems.splice (i, 1);
        }
    }
    localStorage.setItem('problems', JSON.stringify(problems));

    fetchProblems ();
}



//create a function to fetch list of issues, as a datat store, use the browser local storage to retreive issues when application start

function fetchProblems () {
    var problems = JSON.parse(localStorage.getItem('problems'));
    var problemTrackerr = document.getElementById('problemTracker');

    // Initialize the content
    problemTracker.innerHTML = '';
    // use innerHTML to set the content of the ID to empty

    // iterate through the problem

    for (var i = 0; i < problems.length; i++) {
        var id = problems[i].id;
        var desc = problems[i].description;
        var severity = problems[i].severity;
        var assignedTo = problems[i].assignedTo;
        var status = problems[i].status;

        problemTracker.innerHTML += '<div class="well">'+
                                 '<h6>Problem ID: ' + id  + '</h6>'+
                                 '<p><span class="label label-info">' + status + '</span></p>'+
                                 '<h3>' + desc + '</h3>'+
                                 '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>'+
                                 '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>'+
                                 '<a href="#" onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>'+
                                 '<a href="#" onClick="deleteProblem(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                                 '</div>';

    }

}